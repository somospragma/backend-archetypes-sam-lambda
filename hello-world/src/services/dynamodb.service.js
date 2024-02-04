const { ddb } = require("../config/aws.config.js")
const { toObject, toShema}  = require("../config/utils/shemaToObject.js")

const dynamoDBSaveItem = async ({Data, TableName}) => {
  const Item = toShema(Data);
  const params = { TableName, Item };
  return await ddb.putItem(params).promise();
};

const dynamoDBGetItem = async ({Search, TableName}) => {
  const Key = toShema(Search);
  const params = { TableName, Key };
  const response =  await ddb.getItem(params).promise();
  return toObject(response.Item)
};

module.exports ={
  dynamoDBGetItem,
  dynamoDBSaveItem
}
