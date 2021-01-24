const { Schema, model } = require("mongoose")

const crewMemberSchema = new Schema(
  {
    name: { String, required: true },
    surname: { Number, required: true },
    date_of_birth: { String, required: false },
    position: { String, required: true },
    country: { String, required: false },
    films: [{ type: Schema.Types.ObjectId, ref: "Film" }],
    imgurl: { String, required: false },
  },
  { timestamps: true }
)

const CrewMemberModel = model("Crew", crewMemberSchema)

module.exports = CrewMemberModel
