const { ddbDocClient } = require("../../../src/config/aws.config");

const { getItem, saveItem } = require("../../../src/service/dynamodb.service");

jest.mock("../../../src/config/aws.config.js");

describe("Tests service/DynamoDB dynamoDBGetItem", function () {
  it("verificamos que la funcion exista", async () => {
    try {
      expect(getItem).toBeDefined();
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
        Item: { ...Search },
      };

      ddbDocClient.send.mockReturnValue(Response);

      const run = await getItem("example", { id: 2020 });

      expect(run).toEqual(Search);
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });

  it("verificamos Error en la busqueda de item", async () => {
    try {
      const Search = {
        ID: 2022,
        ForumName: "Amazon DynamoDB",
        Subject: "How do I update multiple items?",
      };
      const Response = {
        Item: { ...Search },
      };

      ddbDocClient.send.mockReturnValue(Promise.reject(Error));

      const run = await getItem("example", { id: 2020 });
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.message).toBe("Error al Conectar DynamoDB");
    }
  });
});

describe("Tests service/DynamoDB dynamoDBSaveItem", function () {
  it("verificamos que la funcion exista", async () => {
    try {
      expect(saveItem).toBeDefined();
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });

  it("verificamos Error la guardado de item", async () => {
    try {
      const Data = {
        ID: 2022,
        ForumName: "Amazon DynamoDB",
        Subject: "How do I update multiple items?",
      };

      ddbDocClient.send.mockReturnValue(Promise.reject(Error));

      await saveItem("example", Data);
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.message).toBe("Error al Conectar DynamoDB");
    }
  });
  it("verificamos la guardado de item", async () => {
    try {
      const Data = {
        ID: 2022,
        ForumName: "Amazon DynamoDB",
        Subject: "How do I update multiple items?",
      };

      ddbDocClient.send.mockReturnValue({});

      await saveItem("example", Data);
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });
});
