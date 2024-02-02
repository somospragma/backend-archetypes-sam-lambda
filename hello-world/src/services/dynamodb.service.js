import { ddb } from "../config/aws.config.js";
import { ObjectToDynamoDB } from "../config/utils/objestToDynamoDB.js";

export const dynamoDBSaveItem = async ({Data, TableName}) => {
  const Item = ObjectToDynamoDB(Data);
  const params = { TableName, Item };
  return await ddb.putItem(params).promise();
};

export const dynamoDBGetItem = async ({Search, TableName}) => {
  const Key = ObjectToDynamoDB(Search);
  const params = { TableName, Key };
  return await ddb.getItem(params).promise();
};
