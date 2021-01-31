const db = require("../models")
const ApiError = require("../classes/ApiError")

exports.addFilm = async (req, res, next) => {
  try {
    const { title, year } = req.body
    const foundFilm = await db.Film.findOne(title, year).exec()
    if (!foundFilm) {
      const newFilm = new db.Film({ ...req.body })
      await newFilm.save()
      res.status(201).send({ data: newFilm })
    } else {
      throw new ApiError(400, "This film already exists in the database")
    }
  } catch (error) {
    console.log("Error in adding new film to database", error)
    next(error)
  }
}
exports.getFilm = async (req, res, next) => {}
exports.getAllFilms = async (req, res, next) => {}
exports.editFilmData = async (req, res, next) => {}
exports.deleteFilm = async (req, res, next) => {}
