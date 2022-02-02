import { Dashboard } from "./Dashboard";
import { Settings } from "./Settings";
import { DashboardTitle } from "./DashboardTitle";

export const dashboard = ({ registerAction }) => {
  registerAction({
    hook: "$LAYOUT_ROUTE_COMPONENTS",
    handler: [
      {
        props: {
          path: "/",
          exact: true,
          element: <Dashboard />
        }
      },
      {
        props: {
          path: "/settings",
          exact: true,
          element: <Settings />
        }
      }
    ]
  });

  registerAction({
    hook: "$LAYOUT_MENU_COMPONENTS",
    handler: [
      {
        props: {
          to: '/',
          children: 'Dashboard'
        }
      },
      {
        props: {
          to: '/settings',
          children: 'Settings'
        }
      }
    ]
  });

  registerAction({
    hook: "$LAYOUT_TITLE_COMPONENT",
    handler: { component: DashboardTitle }
  });
};
