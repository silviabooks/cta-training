import { createElement } from "react";
import { useLogin } from "./LoginProvider";

export const LoginGuard = ({ prev, view }) => {
  const { loading, hasLogin } = useLogin();

  if (loading) {
    return "...";
  }

  if (hasLogin) {
    return createElement(prev.component, prev.props);
  } else {
    return createElement(view.component, view.props);
  }
};
