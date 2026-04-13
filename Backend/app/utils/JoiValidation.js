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

const testimonialValidator = Joi.object({
  clientName: Joi.string().required(),
  rating: Joi.number().required(),
  clientImage: Joi.string().required(),
  clientComment: Joi.string().required(),
})

const blogValidator = Joi.object({
  blogTitle: Joi.string().required(),
  blogContent: Joi.string().required(),
  blogImage: Joi.string(),
})




module.exports = { UserSchemaValidator, DoctorSchemaValidator, blogValidator, testimonialValidator };

