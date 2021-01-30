const { Schema, model } = require("mongoose")

const filmSchema = new Schema(
  {
    title: { type: String, required: true },
    year: { type: Number, required: true },
    country: { type: String, required: true },
    director: { type: String, required: false },
    cast: [
      {
        role: { type: String, required: true },
        actor: { type: Schema.Types.ObjectId, ref: "Actor", required: true },
        required: false,
      },
    ],
    crew: [
      {
        crew_member: {
          type: Schema.Types.ObjectId,
          ref: "Crew",
          required: true,
        },
        required: false,
      },
    ],
    poster: { type: String, required: true },
  },
  { timestamps: true }
)

const FilmModel = model("Film", filmSchema)

module.exports = FilmModel
