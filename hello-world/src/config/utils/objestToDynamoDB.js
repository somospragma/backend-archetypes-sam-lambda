
const TYPE = {
  number:"N",
  string:"S"
}
export const ObjectToDynamoDB = (object) => {
  const Item = Object.entries(object).map( ([key, value]) =>{
    const valueObject ={}
    valueObject[TYPE[typeof x]] = value
    return [key, valueObject]
  })
  return Object.fromEntries(Item)
}