const { runHookApp } = require("@forrestjs/hooks");
const fastify = require("@forrestjs/service-fastify");
const fastifyHealthz = require("@forrestjs/service-fastify-healthz");

const homePage = require('./features/home-page');

runHookApp({
  trace: "compact",
  settings: {},
  services: [
    fastify, 
    fastifyHealthz
  ],
  features: [
    homePage
  ]
}).catch(console.error);