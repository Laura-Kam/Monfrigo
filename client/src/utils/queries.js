import { gql } from "@apollo/client";

export const GET_ME = gql`
  query User {
    user {
      username
      recipes {
        name
        cookingInstruction
      }
    }
  }
`;

export const GET_RECIPES = gql`
  query Recipes {
    recipes {
      name
      _id
      cookingInstruction
      ingredients
      rating {
        user {
          username
        }
        recipe {
          name
        }
        rating
      }
    }
  }
`;

export const GET_ONE_RECIPE = gql`
  query Recipe($id: ID) {
    recipe(_id: $id) {
      _id
      name
      cookingInstruction
      ingredients
    }
  }
`;

export const GET_RATING_VALUE = gql``;
