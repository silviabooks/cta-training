const multiplyRoute = (request, reply) => {
  console.log(request.body);

  // return request.body.input.num1 * request.body.input.num1

  reply.send('ok');
};

module.exports = multiplyRoute;