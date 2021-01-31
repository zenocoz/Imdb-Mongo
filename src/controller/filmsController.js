const db = require("../models")
const ApiError = require("../classes/ApiError")

exports.addFilm = async (req, res, next) => {
  try {
    const { title, year } = req.body
    const foundFilm = await db.Film.findOne(
      { title },
      { year: year.toString() }
    ).exec()
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
exports.getFilm = async (req, res, next) => {
  try {
    const film = await db.Film.findById(req.params.filmId).exec()
    if (!film) {
      throw new ApiError(400, "Film not found")
    } else {
      res.status(201).send({ data: film })
    }
  } catch (error) {
    next(error)
  }
}
exports.getAllFilms = async (req, res, next) => {
  try {
    const films = await db.Film.find().exec()
    if (!films) {
      throw new ApiError(400, "There are no films in the database")
    } else {
      res.status(201).send({ data: films })
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}
exports.editFilmData = async (req, res, next) => {
  try {
    const modifiedFilm = await db.Film.findByIdAndUpdate(
      req.params.filmId,
      req.body,
      { new: true }
    )
    if (!modifiedFilm) {
      throw new ApiError(401, "Film not found")
    } else {
      res.status(201).json({ data: modifiedFilm })
    }
  } catch (error) {
    console.log("error in modifying film data", error)
    next(error)
  }
}

exports.deleteFilm = async (req, res, next) => {
  try {
    const deletedFilm = await db.Film.findByIdAndDelete(req.params.filmId)
    console.log(deletedFilm)
    if (deletedFilm) {
      res.status(201).send("film deleted")
    } else {
      throw new ApiError(401, "Film not found")
    }
  } catch (error) {
    console.log("error in deleting the film", error)
    next(error)
  }
}
