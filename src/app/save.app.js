const { requestSaveShema } = require("../config/schema/save.schema");
const { saveItem } = require("../service/dynamodb.service");

const tableName = process.env.SAMPLE_TABLE;

const saveApp = async (body) => {
  try {
    const { error, value } = requestSaveShema.validate(body);
    console.log("🚀 ~ saveApp ~ error, value:", error, value)
    if (error) throw error ;
    
    await saveItem(tableName, value);
  } catch (error) {
    console.log("🚀 ~ saveApp ~ error:", error)
    throw error;
  }
};

module.exports = { saveApp };
