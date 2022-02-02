import * as hooks from "./hooks";
import { LoginGuard } from "./LoginGuard";
import { LoginView } from "./LoginView";

export const loginLogic = ({ registerAction, registerHook }) => {
  registerHook(hooks);

  registerAction({
    hook: "$REACT_ROOT_COMPONENT",
    handler: (prev, { createHook }) => {
      // Let other feature replace the login strategy
      const defaultView = { component: LoginView };
      const { value: view } = createHook.waterfall(
        hooks.LOGIN_VIEW_COMPONENT,
        defaultView
      );

      return {
        component: LoginGuard,
        props: { prev, view }
      };
    }
  });
};
