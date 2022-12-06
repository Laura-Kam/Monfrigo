//use populate to get any nested objects with mongoos
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
      if (context.user) {
        const user = await User.findById({_id: context.user._id})
        .populate({
          path: 'recipes',   // looks ok      (or recipes.rating or recipe)
          populate: 'recipe' 
        });
        return user.recipes.id(_id);
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
      console.log('got to login', args)
      const user = await User.findOne({ email: args.email });
      if (!user) throw new AuthenticationError("Something went wrong");
      const password = await user.isCorrectPassword(args.password);
      if (!password) throw new AuthenticationError("Something went wrong");
      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
