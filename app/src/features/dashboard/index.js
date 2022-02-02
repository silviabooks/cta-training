import { Dashboard } from "./Dashboard";
import { Settings } from "./Settings";
import { DashboardTitle } from "./DashboardTitle";

export const dashboard = ({ registerAction }) => {
  registerAction({
    hook: "$LAYOUT_ROUTES",
    handler: [
      {
        path: "/",
        exact: true,
        element: <Dashboard />
      },
      {
        path: "/settings",
        exact: true,
        element: <Settings />
      }
    ]
  });

  registerAction({
    hook: "$LAYOUT_TITLE_COMPONENT",
    handler: { component: DashboardTitle }
  });
};
