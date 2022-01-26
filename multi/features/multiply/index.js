const multiplyRoute = require('./multiply.route')

const multiplyFeature = {
  hook: '$FASTIFY_POST',
  handler: {
    url: '/multi',
    handler: multiplyRoute
  }
};

module.exports = multiplyFeature;