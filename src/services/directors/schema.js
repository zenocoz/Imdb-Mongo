const { Schema, model } = require("mongoose")

const directorSchema = new Schema(
  {
    name: { String, required: true },
    surname: { Number, required: true },
    date_of_birth: { String, required: true },
    director: { String, required: true },
    films: [{ type: Schema.Types.ObjectId, ref: "Film" }],
    imgurl: { String, required: true },
  },
  { timestamps: true }
)

const DirectorModel = model("Director", directorSchema)

module.exports = DirectorModel
