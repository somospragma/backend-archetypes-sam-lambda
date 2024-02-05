const { saveApp } = require("../app/save.app");

const statusError = {
  ValidationError: ({ message }) => ({
    statusCode: 400,
    message,
    errors: details,
  }),
  Error: ({ message }) => ({
    statusCode: 500,
    message,
  }),
};
const saveHandler = async (event, context) => {
  try {
    await saveApp(event.body);
    return {
      statusCode: 201,
      message: "Datos Guardados con exito",
    }
  } catch (error) {
    console.log("🚀 ~ saveHandler ~ error:", error.name);
    return statusError[error.name](error);
  }
};

module.exports = { saveHandler };
