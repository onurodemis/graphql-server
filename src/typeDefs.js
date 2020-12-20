import { gql } from "apollo-server-express";

export const typeDefs = gql`
  scalar Date

  type Query {
    healty: String    
    users: [User!]!
  }

  type User {
    id: ID!
    name: String!
    surname: String!
    email: String
    birthDate: String
    phone: String
  }

  type Mutation {
    createUser(name: String, surname: String, email: String, birthDate: String, phone: String): User!
  }
`;