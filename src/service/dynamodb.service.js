const { ddbDocClient, GetCommand, PutCommand } = require("./../config/aws.config")

class ErrorDynamoBD extends Error{
  message = "Error al Conectar DynamoDB"
}

const saveItem = async (TableName, Item) => {
  var params = {
    TableName,
    Item
};

try {
    const data = await ddbDocClient.send(new PutCommand(params));
    console.log("Success - item added or updated", data);
  } catch (err) {
    console.log("Error - saveItem:", err.stack);
    throw new ErrorDynamoBD()
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
    throw new ErrorDynamoBD()

  }
};

module.exports ={
  getItem,
  saveItem
}