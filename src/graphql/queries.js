/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPOAPKInquiry = /* GraphQL */ `
  query GetPOAPKInquiry($id: ID!) {
    getPOAPKInquiry(id: $id) {
      id
      budget
      name
      companyName
      email
      projectDetails
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPOAPKInquiries = /* GraphQL */ `
  query ListPOAPKInquiries(
    $filter: ModelPOAPKInquiryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPOAPKInquiries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        budget
        name
        companyName
        email
        projectDetails
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
