import { gql } from "@apollo/client";

export const loginUser = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token {
        user {
          _id
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUSer(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: savedBook!) {
    saveBook(input: $input) {
      _id
      username
      bookCount
      email
      savedBooks {
        #_id
        bookId
        authors
        link
        image
        description
        title
      }
    }
  }
`;

export const REMOVE_BOOK
