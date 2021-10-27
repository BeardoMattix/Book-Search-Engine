import gql from "graphql-tag";

export const FIND_ME = gql`
  {
    me {
      _id
      email
      username
      bookCount
      savedBooks {
        bookId
        authors
        image
        title
        description
        link
      }
    }
  }
`;
