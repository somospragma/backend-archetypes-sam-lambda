const Joi = require("joi");

const requestSaveShema = Joi.object({
  name: Joi.string()
      .required(),


  id: Joi.string()
      .required(),
  

  email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

const response = {};

module.exports = {
  requestSaveShema
}