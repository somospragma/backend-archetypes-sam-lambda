const { saveHandler } = require("./../../../src/handler/save.handler");
const { saveApp } = require("./../../../src/app/save.app");
//jest.mock("./../../../src/app/save.app");

describe("Tests handler/save.handler saveHandler", function () {
  it("verificamos que la funcion exista", async () => {
    try {
      expect(saveHandler).toBeDefined();
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });

  it("verificamos que la funcion valide datos requeridos", async () => {
    try {
      const response = await saveHandler({
        body: {
          id: "2024",
        },
      });
      expect(response).toEqual({
        statusCode: 400,
        message: "Datos invalidos en solicitud",
        errors: [
          {
            message: '"name" is required',
            path: ["name"],
            type: "any.required",
            context: {
              key: "name",
              label: "name",
            },
          },
        ],
      });
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });
});
