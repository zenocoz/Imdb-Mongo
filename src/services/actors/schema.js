const { Schema, model } = require("mongoose")

const actorSchema = new Schema(
  {
    name: { String, required: true },
    surname: { Number, required: true },
    date_of_birth: { String, required: true },
    country: { String, required: true },
    films: [{ type: Schema.Types.ObjectId, ref: "Film" }],
    imgurl: { String, required: true },
  },
  { timestamps: true }
)

const ActorModel = model("Actor", actorSchema)

module.exports = ActorModel
