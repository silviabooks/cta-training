const { runHookApp } = require("@forrestjs/hooks");
const fastify = require("@forrestjs/service-fastify");
const fastifyHealthz = require("@forrestjs/service-fastify-healthz");

const homePage = require('./features/home-page');
const infoFeature = require('./features/info');

runHookApp({
  trace: "compact",
  settings: {},
  services: [
    fastify, 
    fastifyHealthz
  ],
  features: [
    homePage,
    infoFeature
  ]
}).catch(console.error);