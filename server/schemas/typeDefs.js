const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
     _id: ID
     firstName: String
     lastName: String
     email: String
     recipes: [Recipe]
  }


  type Recipe {
     _id: ID
     name: String
     cookingInstruction: String
     ingredients: [String]
     rating: [Rating]
  }

  type Rating {
     rating: Int
     userId: ID 
     recipeId: ID 
  }
  
  type query {
     user: User
     recipes: [Recipe]
     recipe(_id: ID): Recipe
     
 }

  type Mutation {
     addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
     login(email: String!, password: String!): Auth
     favRecipe: Recipe
     addRating(rating: Int, recipeId:ID): Recipe
  }
`;
