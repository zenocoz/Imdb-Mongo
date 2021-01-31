const Joi = require("joi")

//Member

exports.memberSignupSchema = Joi.object().keys({
  name: Joi.string().min(1).required(),
  surname: Joi.string().required(),
  email: Joi.string().email().required(),
  username: Joi.string().min(3).required(),
  password: Joi.string().min(6).required(),
  image: Joi.string().pattern(
    /http?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  ),
})

exports.memberEditSchema = Joi.object().keys({
  name: Joi.string().min(1).required(),
  surname: Joi.string().required(),
  email: Joi.string().email().required(),
  username: Joi.string().min(3).required(),
  password: Joi.string().min(6).required(),
  image: Joi.string().pattern(
    /http?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  ),
})

exports.memberLoginSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
})

exports.filmSchema = Joi.object().keys({
  title: Joi.string().min(1).required(),
  year: Joi.number().min(4).required(),
  country: Joi.string().min(1).required(),
  // director: Joi.required(),
  genre: Joi.string(),
  cast: Joi.allow(),
  crew: Joi.allow(),
  poster: Joi.string().pattern(
    /http?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  ),
})

exports.actorSchema = Joi.object().keys({
  name: Joi.string().min(1).required(),
  surname: Joi.string().required(),
  dateofbirth: Joi.allow(),
  country: Joi.allow(),
  films: Joi.allow(),
  image: Joi.string().pattern(
    /http?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  ),
})
exports.crewMemberSchema = Joi.object().keys({
  name: Joi.string().min(1).required(),
  surname: Joi.string().required(),
  dateofbirth: Joi.allow(),
  country: Joi.allow(),
  films: Joi.allow(),
  image: Joi.string().pattern(
    /http?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  ),
})

exports.reviewSchema = Joi.object().keys({
  memberid: Joi.required(),
  text: Joi.allow(),
  filmid: Joi.required(),
  likes: Joi.allow(),
  image: Joi.string().pattern(
    /http?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  ),
})

exports.likeSchema = Joi.object().keys({
  memberid: Joi.required(),
  reviewid: Joi.required(),
})

// Generic validator function to check body
exports.validateBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body)

    if (error) {
      let originalErrorMessage = error.details[0].message
      let modifiedErrorMessage =
        error.details[0].path +
        " " +
        originalErrorMessage.substring(originalErrorMessage.indexOf(" ") + 1)
      return res.status(400).json({ errors: modifiedErrorMessage })
    }

    if (!req.value) {
      req.value = {}
    }

    next()
  }
}
