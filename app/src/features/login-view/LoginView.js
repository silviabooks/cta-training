import { useQuery, gql } from "@apollo/client";

const USERS_LIST = gql`
  query usersList {
    users {
      name
    }
  }
`;

export const LoginView = () => {
  const foo = useQuery(USERS_LIST);
  console.log(foo);
  return "foo";
};
