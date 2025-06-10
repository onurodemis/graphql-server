import { gql } from "apollo-server-express";

export const typeDefs = gql`
  scalar DateTime
  scalar Long

  type Query {
    healthy: String
    users: [User!]!
  }

  type User {
    id: ID!
    name: String!
    surname: String!
    email: String!
    birthDate: DateTime
    phone: Long
  }

  type Mutation {
    createUser(name: String, surname: String, email: String, birthDate: DateTime, phone: Long): User!
    updateUser(id:ID, name: String, surname: String, email: String, birthDate: DateTime, phone: Long): User!
  }
`;