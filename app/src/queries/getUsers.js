import { gql } from '@apollo/client';

export const GET_USERS = gql`
query getMyUsers {
  users {
    id
    name
    expenses {
      amount
    }
  }
}
`;