import { handler as handlerSave } from "./src/handler/saveItem.js";

const httpMethod = {
  POST: (event, context) => handlerSave(event, context),

  GET: () =>{
    return "metodo GET"
  },
  default:()=>{
    return "metodo no encontrado"
  }
}
export const lambdaHandler = async (event, context) => {

  const method = httpMethod[event.httpMethod] || httpMethod["default"]
  return await method(event)
  };
  