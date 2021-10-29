const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # This shows the fields that are accessible from the Book model
  type Book {
    _id: ID!
    bookId: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }

  type User {
    # This shows the fields that are accessible from the User model
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBook!): User
    removeBook(bookId: ID!): User
  }
  # This defines which information is shown when looking at saved books
  input savedBook {
    bookId: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }
`;

module.exports = typeDefs;
