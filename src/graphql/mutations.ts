/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPet = /* GraphQL */ `mutation CreatePet(
  $input: CreatePetInput!
  $condition: ModelPetConditionInput
) {
  createPet(input: $input, condition: $condition) {
    id
    name
    description
    petType
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePetMutationVariables,
  APITypes.CreatePetMutation
>;
export const updatePet = /* GraphQL */ `mutation UpdatePet(
  $input: UpdatePetInput!
  $condition: ModelPetConditionInput
) {
  updatePet(input: $input, condition: $condition) {
    id
    name
    description
    petType
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePetMutationVariables,
  APITypes.UpdatePetMutation
>;
export const deletePet = /* GraphQL */ `mutation DeletePet(
  $input: DeletePetInput!
  $condition: ModelPetConditionInput
) {
  deletePet(input: $input, condition: $condition) {
    id
    name
    description
    petType
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePetMutationVariables,
  APITypes.DeletePetMutation
>;
