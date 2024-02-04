const {
  dynamoDBGetItem, dynamoDBSaveItem
} = require("../../../src/services/DynamoDB.service.js");
const { ddb } = require("../../../src/config/aws.config.js");

jest.mock("../../../src/config/aws.config.js");

describe("Tests service/DynamoDB dynamoDBGetItem", function () {
  it("verificamos que la funcion exista", async () => {
    try {
      expect(dynamoDBGetItem).toBeDefined();
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });

  it("verificamos la busqueda de item", async () => {
    try {
      const Search = {
        ID: 2022,
        ForumName: "Amazon DynamoDB",
        Subject: "How do I update multiple items?",
      };
      const Response = {
        Item: {
          LastPostDateTime: {
            S: "201303190436",
          },
          Message: {
            S: "I want to update multiple items in a single call. What's the best way to do that?",
          },
        },
      };

      ddb.getItem.mockReturnValue({
        promise: () => Response,
      });

      const run = await dynamoDBGetItem({ Search, TableName: "Thread" });

      expect(run).toEqual({
        LastPostDateTime: "201303190436",
        Message:
          "I want to update multiple items in a single call. What's the best way to do that?",
      });
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });
});


describe("Tests service/DynamoDB dynamoDBSaveItem", function () {
  it("verificamos que la funcion exista", async () => {
    try {
      expect(dynamoDBSaveItem).toBeDefined();
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });

  it("verificamos la guardato de item", async () => {
    try {
      const Data = {
        ID: 2022,
        ForumName: "Amazon DynamoDB",
        Subject: "How do I update multiple items?",
      };
      const Response = {};

      ddb.putItem.mockReturnValue({
        promise: () => Response,
      });

      const run = await dynamoDBSaveItem({ Data, TableName: "Thread" });

      expect(run).toEqual({});
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });
});