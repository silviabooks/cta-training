import { runHookApp } from "@forrestjs/hooks";
import reactRoot from "@forrestjs/react-root";
import reactRouter from "@forrestjs/react-router";

import { layout } from "./features/layout";

runHookApp({
  services: [reactRoot, reactRouter, layout]
});
