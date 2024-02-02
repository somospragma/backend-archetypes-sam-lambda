import { getItemStorage } from "../bussines/storage.dynamodb.js";
export const handler = async (event, context) => {
  try {
    const data = await getItemStorage(event.body);
    return {
      statusCode: 200,
      body: {
        data,
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
