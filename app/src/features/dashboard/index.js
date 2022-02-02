import { Dashboard } from "./Dashboard";
import { Settings } from "./Settings";

export const dashboard = {
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
};
