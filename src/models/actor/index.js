const { Schema, model } = require("mongoose")

const actorSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    dateofbirth: { type: Date, required: false },
    country: { type: String, required: true },
    films: [{ type: Schema.Types.ObjectId, ref: "Film", required: false }],
    image: { type: String, required: true },
  },
  { timestamps: true }
)

const ActorModel = model("Actor", actorSchema)

module.exports = ActorModel
