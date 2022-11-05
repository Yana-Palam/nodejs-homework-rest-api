const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `missing required name field`,
  }),
  email: Joi.string().email().required().messages({
    "any.required": `missing required email field`,
  }),
  phone: Joi.string()
    .trim()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      "any.required": `missing required phone field`,
    }),
}).required();

module.exports = { addSchema };