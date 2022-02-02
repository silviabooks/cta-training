import { createElement } from "react";
import { useLogin } from "./LoginProvider";

export const LoginGuard = ({ prev, view }) => {
  const { hasLogin } = useLogin();

  if (hasLogin) {
    return createElement(prev.component, prev.props);
  } else {
    return createElement(view.component, view.props);
  }
};
