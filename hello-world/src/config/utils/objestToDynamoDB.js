
const TYPE = {
  number:"N",
  string:"S"
}
module.exports = (object={}) => {  
  const Item = Object.entries(object).map( ([key, value]) =>{
    const valueObject ={}
    valueObject[TYPE[typeof value]] = value
    return [key, valueObject]
  })
  return Object.fromEntries(Item)
}