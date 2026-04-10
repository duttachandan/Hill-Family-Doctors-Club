const Joi = require("joi");

const UserSchemaValidator = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  role: Joi.string().required(),
});

const DoctorSchemaValidator = Joi.object({
  name: Joi.string().required(),
  specialization: Joi.string().required(),
  fees: Joi.number().required(),
  experience: Joi.number().required(),
  center: Joi.string().required(),
  Image: Joi.string().required(),
  availableSlots: Joi.array().items(
    Joi.object({
      date: Joi.string()
        .valid(
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        )
        .required(),
      time: Joi.string()
        // .valid(/^\d{1,2}(am|pm)$/)
        .required(),
    })
      .min(1)
      .required(),
  ),
});

// const seoValidation = Joi.object({
//   dataType: Joi.string(),
//   heading1: Joi.string(),
//   heading2: Joi.string(),
//   paragraph: Joi.string(),
//   image: Joi.string()
// })

module.exports = { UserSchemaValidator, DoctorSchemaValidator };
