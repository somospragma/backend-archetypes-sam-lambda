import { saveItemStorage } from "../bussines/saveItemDynamoDb.js";
export const handler = async (event, context) => {
  try {
    await saveItemStorage(event.body);
    return {
      statusCode: 200,
      body: {
        data: null,
        message: "Exitoso",
      },
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: {
        data: null,
        message: "Error",
      },
    };
  }
};
