const { Schema, model } = require("mongoose")

const crewMemberSchema = new Schema(
  {
    name: { String, required: true },
    surname: { Number, required: true },
    dateofbirth: { Date, required: false },
    position: { String, required: true },
    country: { String, required: false },
    films: [{ type: Schema.Types.ObjectId, ref: "Film" }],
    imgurl: { String, required: false },
  },
  { timestamps: true }
)

const CrewMemberModel = model("CrewMember", crewMemberSchema)

module.exports = CrewMemberModel
