const { Schema, model } = require("mongoose")

const directorSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    date_of_birth: { type: String, required: false },
    country: { type: String, required: true },
    films: [{ type: Schema.Types.ObjectId, ref: "Film", required: false }],
    imgurl: { type: String, required: true },
  },
  { timestamps: true }
)

const DirectorModel = model("Director", directorSchema)

module.exports = DirectorModel
