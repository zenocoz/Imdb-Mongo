const mongoose = require("mongoose")

const filmSchema = new mongoose.Schema(
  {
    title: { String, required: true },
    year: { Number, required: true },
    country: { String, required: true },
    director: { String, required: true },
    cast: [
      {
        role: { String, required: true },
        actor: { type: Schema.Types.ObjectId, ref: "Actor", required: true },
      },
    ],
    crew: [
      {
        crew_member: {
          type: Schema.Types.ObjectId,
          ref: "Crew",
          required: true,
        },
      },
    ],
    poster: { String, required: true },
  },
  { timestamps: true }
)

const FilmModel = mongoose.model("Film", filmSchema)

module.exports = FilmModel
