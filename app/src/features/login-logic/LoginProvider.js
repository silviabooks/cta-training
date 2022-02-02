import { createContext, useContext } from "react";

const INITIAL_STATE = {
  hasLogin: false
};

const LoginContext = createContext(INITIAL_STATE);

export const LoginProvider = (props) => {
  console.log("Ill do smth");

  return <LoginContext.Provider value={INITIAL_STATE} {...props} />;
};

export const useLogin = () => useContext(LoginContext);
