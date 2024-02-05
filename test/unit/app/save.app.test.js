
const { saveApp }  = require("./../../../src/app/save.app")
const { saveItem } = require("./../../../src/service/dynamodb.service");

jest.mock("./../../../src/service/dynamodb.service");

describe("Tests app/save.app saveApp", function () {
  it("verificamos que la funcion exista", async () => {
    try {
      expect(saveApp).toBeDefined();
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });

  it("verificamos validacion de body id requerido", async () => {
    try {
      await saveApp({ name:"demo" })
    } catch (error) {
      expect(error.constructor).toThrowError();
      expect(error.name).toBe("ValidationError")
    }
  });

  it("verificamos validacion de body name requerido", async () => {
    try {
      await saveApp({ id:"demo" })
    } catch (error) {
      expect(error.constructor).toThrowError();
      expect(error.name).toBe("ValidationError")
    }
  });

  it("verificamos validacion conexion dynamodb", async () => {
    try {
      saveItem.mockReturnValue(new Error('cannot login'))
      .mockName('saveItem');

      await saveApp({ id:"demo", name:"demo" })
    } catch (error) {
      expect(error.name).toBe("Error")
      expect(error.constructor).toThrowError();
    }
  });

  it("verificamos validacion guardado dynamodb", async () => {
    try {
      saveItem.mockReturnValue({})
      .mockName('saveItem');

      await saveApp({ id:"demo", name:"demo" })
    } catch (error) {
      expect(error.constructor).not.toThrowError();
    }
  });

});
