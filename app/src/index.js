import { runHookApp } from "@forrestjs/hooks";
import reactRoot from "@forrestjs/react-root";
import reactRouter from "@forrestjs/react-router";

import { layout } from "./features/layout";
import { dashboard } from "./features/dashboard";
import { expenses } from "./features/expenses";
import { loginLogic } from "./features/login-logic";
import { loginView } from "./features/login-view";

runHookApp({
  settings: {
    layout: {
      title: {
        value: "MyApp"
      }
    }
  },
  services: [reactRoot, reactRouter],
  features: [layout, dashboard, expenses, loginLogic, loginView]
});
