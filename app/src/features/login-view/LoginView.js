import { useQuery, gql } from "@apollo/client";
import { useLogin } from "../login-logic";

const USERS_LIST = gql`
  query usersList {
    users {
      id
      name
    }
  }
`;

export const LoginView = () => {
  const { loading, data, error } = useQuery(USERS_LIST);
  const { loginAs } = useLogin();

  if (loading) return "loading...";
  if (error) return "error";

  return (
    <div>
      <h2>Login</h2>
      <ul>
        {data.users.map((user) => (
          <li key={user.id} onClick={() => loginAs(user.id)}>
            Login as: {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
