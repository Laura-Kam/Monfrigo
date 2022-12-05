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
  },
};

module.exports = resolvers;
