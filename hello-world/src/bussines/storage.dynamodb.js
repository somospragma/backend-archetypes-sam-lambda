import { dynamoDBSaveItem, dynamoDBGetItem } from "../services/dynamodb.service.js"
export const saveItemStorage = async (body) =>{
  try {
    await dynamoDBSaveItem({Data:body, TableName:"otp" })
  } catch (error) {
   console.log(error)
   throw error
  }

}

export const getItemStorage = async (Search) =>{
  try {
    return await dynamoDBGetItem({Search, TableName:"otp" })
  } catch (error) {
   console.log(error)
   throw error
  }

}