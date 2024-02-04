const {
  ddbDocClient,
  GetCommand,
  PutCommand,
} = require("./../config/aws.config");


const saveItem = async (TableName, Item) => {
  try {
    const params = {
      TableName,
      Item,
    };
    const data = await ddbDocClient.send(new PutCommand(params));
    console.log("Success - item added or updated", data);
  } catch (err) {
    console.log("Error - saveItem:", err.stack);
    throw new Error('Error al Conectar DynamoDB')
  }
};

const getItem = async (TableName, Key) => {
  const params = {
    TableName,
    Key,
  };

  try {
    const data = await ddbDocClient.send(new GetCommand(params));
    return data.Item;
  } catch (err) {
    console.log("Error - getItem:", err);
    throw new Error('Error al Conectar DynamoDB')
  }
};

module.exports = {
  getItem,
  saveItem
};
