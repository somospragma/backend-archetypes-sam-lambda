const { requestSaveShema } = require("./../../../../src/config/schema/save.schema");

describe("Tests schema/save.schema requestSaveShema", function () {
  it("verificamos que la funcion exista", async () => {
    try {
      expect(requestSaveShema).toBeDefined();
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });

  it("verificamos validacion exitosa de shema", async () => {
    try {
      const { error, value } = requestSaveShema.validate({ name: 'astring', id:"2020" })
      expect(error).not.toBeDefined()
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });

  it("verificamos validacion error de shema", async () => {
    try {
      const { error, value } = requestSaveShema.validate({ id:2020 })
      expect(error).toBeDefined()
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });
});
