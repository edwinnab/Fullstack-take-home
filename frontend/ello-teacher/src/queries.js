import { gql } from '@apollo/client';

export const GET_BOOKS = gql `
query {
  books {
    title
    author
    coverPhotoURL
    readingLevel
  }
}
`;