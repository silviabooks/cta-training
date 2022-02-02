import { runHookApp } from '@forrestjs/hooks'
import reactRoot from '@forrestjs/react-root'
import reactRouter from '@forrestjs/react-router'

runHookApp({
  services: [reactRoot, reactRouter]
})
