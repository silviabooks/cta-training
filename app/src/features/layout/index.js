import * as hooks from "./hooks";
import { Layout } from "./Layout";
import { LayoutTitle } from "./LayoutTitle";

export const layout = ({ registerAction, registerHook }) => {
  registerHook(hooks);

  registerAction({
    hook: "$REACT_ROOT_COMPONENT",
    handler: { component: Layout }
  });

  registerAction({
    hook: "$INIT_FEATURES",
    handler: ({ createHook, setContext, getConfig }) => {
      // Collect routes from any feature:
      const routes = createHook
        .sync(hooks.LAYOUT_ROUTES)
        .reduce((a, c) => [...a, ...c[0]], []);

      // Let feature REPLACE the title component
      // or get the default value from App's config
      const { value: title } = createHook.waterfall(
        hooks.LAYOUT_TITLE_COMPONENT,
        {
          component: LayoutTitle,
          props: {
            value: getConfig("layout.title.value", "config(layout.title.value)")
          }
        }
      );

      // Export routes to the ForrestJS App context:
      setContext("layout.routes.items", routes);
      setContext("layout.title", title);
    }
  });
};
