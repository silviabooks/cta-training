import { LoginView } from "./LoginView";

export const loginView = ({ registerAction }) => {
  registerAction({
    hook: "$LOGIN_VIEW_COMPONENT",
    handler: { component: LoginView }
  });
};
