import { runHookApp } from "@forrestjs/hooks";
import reactRoot from "@forrestjs/react-root";
import reactRouter from "@forrestjs/react-router";

import { layout } from "./services/layout";
import { dashboard } from "./features/dashboard";
import { expenses } from "./features/expenses";
import { login } from "./features/login";

runHookApp({
  settings: {
    layout: {
      title: {
        value: "MyApp"
      }
    }
  },
  services: [reactRoot, reactRouter],
  features: [layout, dashboard, expenses, login]
});
