const { Recipe, User } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    user: async () => {},
    recipes: async () => {
      const recipes = await Recipe.find();
      return recipes;
    },

    recipe: async (parent, { _id }, context) => {
      console.log('id:', _id)
      if (context.user) {
        const recipe = await Recipe.findById(_id).populate(['ingredients', 'rating']);
        console.log(recipe);
        return recipe;
      }
      throw new AuthenticationError('Not logged in');
    },
  },
  
  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, args) => {
      const user = await User.findOne({ email: args.email });
      if (!user) throw new AuthenticationError("Something went wrong");
      const password = await user.isCorrectPassword(args.password);
      if (!password) throw new AuthenticationError("Something went wrong");
      const token = signToken(user);
      return { token, user };
    },

    // favRecipe: async(_, {recipe}, context) 
    // check if a recipe with recipe.name exists in your db
    // if it exists -> simply add the recipe._id to the user's recipes array
    // if it doesn't exist -> create  the recipe, then add the recipe._id to the user's array
    // return the user -> change the return type in typeDefs
    addRating: async (parent, { recipes }, context) => {
      console.log(context);
      if (context.user) {
        const rating = new Rating({ recipes });

        await User.findByIdAndUpdate(context.user._id, { $push: { ratings: rating } });

        return recipe;
      }
      throw new AuthenticationError('Not logged in');
  },
  },
};

module.exports = resolvers;
