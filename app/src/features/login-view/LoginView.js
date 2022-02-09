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

const FAKE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtdXNlci1pZCI6IjQifX0.UOSRMKKmsELLnTbVRYufsTjK__11ocn3EHEonS1yfAM";

export const LoginView = () => {
  const { loading, data, error } = useQuery(USERS_LIST);
  const { writeToken } = useLogin();

  if (loading) return "loading...";
  if (error) return "error";

  return (
    <div>
      <h2>Login</h2>
      <ul>
        {data.users.map((user) => (
          <li key={user.id} onClick={() => writeToken(FAKE_TOKEN)}>
            Login as: {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
