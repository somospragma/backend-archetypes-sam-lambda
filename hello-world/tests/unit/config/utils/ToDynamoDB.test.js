const {toShema, toObject} = require("../../../../src/config/utils/shemaToObject.js");

describe("Tests config/ToDynamoDB toShema", function () {
  it("verificamos que la funcion exista", async () => {
    try {
      expect(toShema).toBeDefined();
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });

  it("verificamos transformacion sin parametros", async () => {
    try {
      const run = toShema();
      expect(run).toEqual({});
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });

  it("verificamos transformacion exitosa", async () => {
    try {
      const run = toShema({ id: "demo" });
      expect(run).toEqual({
        id: {
          S: "demo",
        },
      });
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });
});

describe("Tests config/ToDynamoDB toObject", function () {
  it("verificamos que la funcion exista", async () => {
    try {
      expect(toObject).toBeDefined();
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });

  it("verificamos transformacion sin parametros", async () => {
    try {
      const run = toObject();
      expect(run).toEqual({});
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });

  it("verificamos transformacion exitosa", async () => {
    try {
      const run = toObject({
        id: {
          S: "demo",
        },
      });
      expect(run).toEqual({ id: "demo" });
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });
});
