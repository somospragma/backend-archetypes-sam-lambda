const ObjectToDynamoDB = require("../../../../src/config/utils/objestToDynamoDB.js");

describe("Tests config/ToDynamoDB", function () {
  it("verificamos que la funcion exista", async () => {
    try {
      expect(ObjectToDynamoDB).toBeDefined();
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });

  it("verificamos transformacion sin parametros", async () => {
    try {
      const run = ObjectToDynamoDB();
      expect(run).toEqual({});
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });

  it("verificamos transformacion exitosa", async () => {
    const response = {
      id: {
        S: "demo",
      },
    };
    try {
      const run = ObjectToDynamoDB({ id: "demo" });
      expect(run).toEqual(response);
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });
});
