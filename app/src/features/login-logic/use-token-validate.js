import { useEffect, useState } from "react";
import { gql } from "@apollo/client";

const GET_MYSELF = gql`
  query getMyself {
    users {
      name
    }
  }
`;

export const useTokenValidate = ({
  token,
  client,
  clearToken,
  setHasLogin
}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Validate the token
  useEffect(() => {
    // Handle a logged out situation
    if (!token) {
      setHasLogin(false);
      setLoading(false);
      return;
    }

    // Validate the token
    setError(null);
    setLoading(true);
    client
      .query({ query: GET_MYSELF })
      .then(({ data }) => {
        if (data.users[0].name) {
          setHasLogin(true);
          setUser(data.users[0]);
        }
      })
      .catch((err) => {
        console.log("Nooooo", err);
        setError(err);
        clearToken();
      })
      .finally(() => {
        setLoading(false);
      });
  }, [client, token]);

  return {
    user,
    loading,
    error
  };
};
