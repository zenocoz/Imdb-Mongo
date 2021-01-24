const mongoose = require("mongoose")

const filmSchema = new mongoose.Schema(
  {
    title: { String, required: true },
    year: { Number, required: true },
    country: { String, required: true },
    director: { String, required: true },
    cast: [Cast],
    poster: { String, required: true },
  },
  { timestamps: true }
)

const FilmModel = mongoose.model("Film", filmSchema)

module.exports = FilmModel
