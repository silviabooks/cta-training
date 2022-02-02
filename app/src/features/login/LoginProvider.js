import { createContext, useContext } from "react";

const LoginContext = createContext({
  hasLogin: false
});

export const LoginProvider = () => {};

export const useLogin = () => useContext(LoginContext);
