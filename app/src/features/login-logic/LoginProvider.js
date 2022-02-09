import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { ApolloProvider } from "@apollo/client";

import { useApolloClient } from "./use-apollo-client";
import { useTokenValidate } from "./use-token-validate";
import { useTokenStorage } from "./use-token-storage";

const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [hasLogin, setHasLogin] = useState(false);

  // Load the current token
  const { token, clearToken, writeToken } = useTokenStorage();

  // Build the ApolloClient
  const { client } = useApolloClient("/v1/graphql", token);

  const { user, loading, error } = useTokenValidate({
    client,
    setHasLogin,
    token,
    clearToken
  });

  return (
    <ApolloProvider client={client}>
      <LoginContext.Provider
        value={{
          hasLogin,
          user,
          loading,
          error,
          writeToken,
          logout: clearToken
        }}
        {...props}
      />
    </ApolloProvider>
  );
};

export const useLogin = () => useContext(LoginContext);
