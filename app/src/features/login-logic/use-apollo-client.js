import { useMemo } from "react";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const buildClient = (endpoint, token) => {
  const options = {
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "no-cache",
        errorPolicy: "ignore"
      },
      query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all"
      }
    }
  };

  return token
    ? new ApolloClient({
        ...options,
        link: new HttpLink({
          uri: endpoint,
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      })
    : new ApolloClient({
        ...options,
        link: new HttpLink({
          uri: endpoint
        })
      });
};

export const useApolloClient = (endpoint, token) => {
  const client = useMemo(() => buildClient(endpoint, token), [token]);
  return { client };
};
