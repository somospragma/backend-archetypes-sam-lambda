const { saveHandler } = require("./src/handler/save.handler");

const httpMethod = {
  POST: (event, context) => saveHandler(event, context),

  GET: () => {
    return "metodo GET";
  },
  default: () => {
    return "metodo no encontrado";
  },
};
const lambdaHandler = async (event, context) => {
  const method = httpMethod[event.httpMethod] || httpMethod["default"];
  return await method(event, context);
};

module.exports = { lambdaHandler };
