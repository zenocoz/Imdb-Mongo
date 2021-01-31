const { Schema, model } = require("mongoose")

const filmSchema = new Schema(
  {
    title: { type: String },
    year: { type: Number },
    country: { type: String },
    genre: { type: String },
    cast: [
      {
        role: { type: String },
        actor: { type: Schema.Types.ObjectId, ref: "Actor" },
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
    poster: { type: String },
  },
  { timestamps: true }
)

const FilmModel = model("Film", filmSchema)

module.exports = FilmModel
