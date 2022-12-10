const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
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
    cookingInstruction: [String]
    ingredients: [String]
    imageLink: String
    rating: [Rating]
  }

  input RecipeInput {
    # recipeID: ID
    name: String!
    cookingInstruction: [String]!
    ingredients: [String]!
    imageLink: String!
  }

  type Rating {
    rating: Int
    user: User
    recipeApiId: String
  }

  type Query {
    user: User
    recipes: [Recipe]
    recipe(_id: ID): Recipe
    getRatingValueForRecipe(recipeApiId: String): Int
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    favRecipe(recipe: RecipeInput!): User
    addRating(rating: Int, recipeApiId: String): Rating
    removeRecipe(name: String!): User
  }
`;

module.exports = typeDefs;

