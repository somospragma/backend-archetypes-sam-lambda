
const TYPE = {
  number:"N",
  string:"S",
  array:"SS"
}
const toShema = (object={}) => {  
  const Item = Object.entries(object).map( ([key, value]) =>{
    const valueObject ={}
    valueObject[TYPE[typeof value]] = value
    return [key, valueObject]
  })
  return Object.fromEntries(Item)
}

const toObject= (shema={}) => {
  const Item = Object.entries(shema).map( ([key, value]) =>{
    const valueObject =Object.values(value)
    return [key, valueObject.shift()]
  })
  return Object.fromEntries(Item)
}

module.exports = {
toShema, toObject
}