import * as hooks from "./hooks";
import { Layout } from "./Layout";

export const layout = ({ registerAction, registerHook }) => {
  registerHook(hooks);

  registerAction({
    hook: "$REACT_ROOT_COMPONENT",
    handler: { component: Layout }
  });

  registerAction({
    hook: "$INIT_FEATURES",
    handler: ({ createHook, setContext }) => {
      // Collect routes from any feature:
      const routes = createHook
        .sync(hooks.LAYOUT_ROUTES)
        .reduce((a, c) => [...a, ...c[0]], []);

      // Export routes to the ForrestJS App context:
      setContext("layout.routes.items", routes);
    }
  });
};
