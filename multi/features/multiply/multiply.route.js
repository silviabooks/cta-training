const multiplyRoute = (request, reply) => {
  console.log(request.body);

  const result = request.body.input.num1 * request.body.input.num2;

  reply.send({ result });
};

module.exports = multiplyRoute;