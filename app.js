const { getItem, saveItem } = require("./src/service/dynamodb.service");

const tableName = process.env.SAMPLE_TABLE;

const lambdaHandler = async (event, context) => {
  // All log statements are written to CloudWatch
  console.info("received:", event);

  // Get id and name from the body of the request
  const id = event.body.id;
  const name = event.body.name;

  const response = {
    statusCode: 200,
  };

  try {
    await saveItem(tableName, { id, name });
    response["body"] = JSON.stringify([]);

    const data = await getItem(tableName, { id })
    response["body"] = JSON.stringify(data);
  } catch (err) {
    response["statusCode"] = 500
    response["error"] = err.message;
  }

  // All log statements are written to CloudWatch
  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );
  return response;
};

module.exports = {
  lambdaHandler,
};
