const Joi = require("joi").extend(require("@joi/date"));
Joi.objectId = require("joi-objectid")(Joi);

const validateUser = (req, res, next) => {
  const userSchema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().required(),
    mobile: Joi.string()
      .pattern(/^[0-9]+$/)
      .required(),
    country: Joi.string().required(),
  });

  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(200).send({ error: error.details[0].message });
  }
  next();
};

const validateMoment = (req, res, next) => {
  const momentSchema = Joi.object({
    title: Joi.string().required(),
    tag: Joi.array().min(1).required(),
    image: Joi.string().required(),
    comment: Joi.string().min(0).max(100).required(),
    userId: Joi.string().required(),
  });
  const { error } = momentSchema.validate(req.body);
  if (error) {
    return res.status(200).send({ error: error.details[0].message });
  }
  next();
};

module.exports = {
  validateUser,
  validateMoment,
};
