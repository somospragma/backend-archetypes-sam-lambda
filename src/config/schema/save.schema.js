const Joi = require("joi");

const requestSaveShema = Joi.object({
  name: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),


  id: [
      Joi.string(),
      Joi.number()
  ],


  email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

const response = {};

module.exports = {
  requestSaveShema
}