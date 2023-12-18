/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPet = /* GraphQL */ `query GetPet($id: ID!) {
  getPet(id: $id) {
    id
    name
    description
    petType
    image
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPetQueryVariables, APITypes.GetPetQuery>;
export const listPets = /* GraphQL */ `query ListPets($filter: ModelPetFilterInput, $limit: Int, $nextToken: String) {
  listPets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      petType
      image
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPetsQueryVariables, APITypes.ListPetsQuery>;
