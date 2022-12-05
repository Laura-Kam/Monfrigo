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
   name: String 
   cookingInstruction: String 
  }

  type Rating {
   _id: ID
   rating: Int
   user: User 
   recipe: Recipe 
}

type Auth {
   token: ID
   user: User
 }
  
  type Query {
     user: User
     recipes: [Recipe] 
     recipe(_id: ID): Recipe
     
 }

  type Mutation {
     addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
     addRating(recipes: [ID]!): Rating
     saveRecipe(recipe: RecipeInput): Recipe
     login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

