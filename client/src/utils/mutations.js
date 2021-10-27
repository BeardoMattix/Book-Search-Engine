import { gql } from "@apollo/client";

//This logs in the user based on email and password.
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

// Adds a new user. They enter a username, email, and password, which will be validated with JWT to log them in.
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
//This takes in the input and saves the book.
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
// This will remove the book based on its ID.
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
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
