const { Recipe, User } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");
const { Error } = require("mongoose");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    recipes: async () => {
      const recipes = await Recipe.find();
      return recipes;
    },

    recipe: async (parent, { _id }, context) => {
      console.log("id:", _id);
      if (context.user) {
        const recipe = await Recipe.findById(_id).populate([
          "ingredients",
          "rating",
        ]);
        console.log(recipe);
        return recipe;
      }
      throw new AuthenticationError("Not logged in");
    },
    getRatingValueForRecipe: async (parent, { recipeApiId }, context) => {
      const ratingsAll = await Rating.find({ recipeApiId });
      const sum = ratingsAll.reduce((acc, next) => acc + next.rating, 0);
      const avg = sum / ratingsAll.length || 0;
      return Math.floor(avg);
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, args) => {
      console.log("got to login", args);
      const user = await User.findOne({ email: args.email });
      if (!user) throw new AuthenticationError("Something went wrong");
      const password = await user.isCorrectPassword(args.password);
      if (!password) throw new AuthenticationError("Something went wrong");
      const token = signToken(user);
      return { token, user };
    },

    favRecipe: async (_, { recipe }, context) => {
      if (context.user) {
        const recipeInDatabase = await Recipe.findOne({ name: recipe.name });
        if (recipeInDatabase) {
          // const updatedUser = await User.findByIdAndUpdate(
          //   { _id: context.user._id },
          //   { $addToSet: { recipes: recipeInDatabase._id } },
          //   { new: true }
          // ).populate(['recipes'])
          const updatedUser = await User.findById(context.user._id).populate([
            "recipes",
          ]);
          const index = updatedUser.recipes.findIndex(
            (storedRecipes) => storedRecipes.name === recipe.name
          );
          if (index === -1) {
            updatedUser.recipes.push(recipe);
            updatedUser.save();
          }
          return updatedUser;
        } else {
          const newRecipe = await Recipe.create({
            name: recipe.name,
            cookingInstruction: recipe.cookingInstruction,
            ingredients: recipe.ingredients,
          });
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $addToSet: { recipes: newRecipe } },
            { new: true }
          ).populate(["recipes"]);
          return updatedUser;
        }
      }
      throw new AuthenticationError("Not logged in");
    },

    addRating: async (parent, { rating, recipeApiId }, context) => {
      console.log(context);
      if (context.user) {
        return await Rating.create({
          rating,
          recipeApiId,
          user: context.user._id,
        });
        // const rating = new Rating({ recipes });
        // await User.findByIdAndUpdate(context.user._id, {
        //   $push: { ratings: rating },
        // });
        // return recipe;
      }
      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
