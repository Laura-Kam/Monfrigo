import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        email
      }
      token
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        email
        username
      }
      token
    }
  }
`;

export const FAV_RECIPE = gql`
  mutation FavRecipe($recipe: RecipeInput!) {
  favRecipe(recipe: $recipe) {
    _id
    email
    recipes {
      name
      cookingInstruction
      ingredients
      imageLink
    }
  }
}
`;

