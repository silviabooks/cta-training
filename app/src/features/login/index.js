import { LoginGuard } from "./LoginGuard";
import { LoginView } from "./LoginView";

export const login = ({ registerAction }) => {
  registerAction({
    hook: "$REACT_ROOT_COMPONENT",
    handler: (prev) => {
      return {
        component: LoginGuard,
        props: { prev, view: { component: LoginView } }
      };
    }
  });
};
