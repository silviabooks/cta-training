import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as OriginalApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

import { useLogin } from "./LoginProvider";

const buildClient = (endpoint, token) =>
  new ApolloClient({
    uri: endpoint,
    cache: new InMemoryCache()
  });

export const ApolloProvider = ({ children }) => {
  const { hasLogin } = useLogin();

  // Skip for now
  if (hasLogin) {
    // create client with header and token
  } else {
    // create client without anything
  }

  const client = buildClient("/v1/graphql");

  return <OriginalApolloProvider client={client} children={children} />;
};
