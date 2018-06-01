import Joi from 'joi'

export const userSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .min(3)
    .max(20),
  lastName: Joi.string()
    .required()
    .min(3)
    .max(20),
  middleName: Joi.string()
    .min(3)
    .max(20),
  phones: Joi.array().items(Joi.string()),
  addresses: Joi.array().items(Joi.string()),
  email: Joi.string().email(),
  photoUrl: Joi.string().uri(),
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(10)
    .required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
})
