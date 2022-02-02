import { useEffect, useState } from "react";

export const useTokenStorage = (key = "hasura_token") => {
  const [token, setToken] = useState(null);

  // Load the current token
  useEffect(() => {
    console.log("@load token");
    const token = localStorage.getItem(key);
    token && setToken(token);
  }, []);

  const clearToken = () => {
    localStorage.removeItem(key);
    setToken(null);
  };

  const writeToken = (token) => {
    localStorage.setItem(key, token);
    setToken(token);
  };

  return {
    token,
    writeToken,
    clearToken
  };
};
