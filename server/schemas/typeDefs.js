const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    recipes: [Recipe]
  }

  type Auth {
    user: User
    token: ID
  }

  type Recipe {
    _id: ID
    name: String
    cookingInstruction: String
    ingredients: [String]
    rating: [Rating]
  }

  input RecipeInput {
    # recipeID: ID
    name: String
    cookingInstruction: String
    ingredients: [String]
    }

  type Rating {
    rating: Int
    user: User
    recipe: Recipe
  }

  type Query {
    user: User
    recipes: [Recipe]
    recipe(_id: ID): Recipe
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    favRecipe(recipe: RecipeInput!): User
    addRating(rating: Int, recipeId: ID): Recipe
  }
`;

module.exports = typeDefs;
