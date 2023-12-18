/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePet = /* GraphQL */ `subscription OnCreatePet(
  $filter: ModelSubscriptionPetFilterInput
  $owner: String
) {
  onCreatePet(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePetSubscriptionVariables,
  APITypes.OnCreatePetSubscription
>;
export const onUpdatePet = /* GraphQL */ `subscription OnUpdatePet(
  $filter: ModelSubscriptionPetFilterInput
  $owner: String
) {
  onUpdatePet(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePetSubscriptionVariables,
  APITypes.OnUpdatePetSubscription
>;
export const onDeletePet = /* GraphQL */ `subscription OnDeletePet(
  $filter: ModelSubscriptionPetFilterInput
  $owner: String
) {
  onDeletePet(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePetSubscriptionVariables,
  APITypes.OnDeletePetSubscription
>;
