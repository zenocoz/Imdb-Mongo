const { Schema, model } = require("mongoose")

const crewMemberSchema = new Schema(
  {
    name: { String },
    surname: { Number },
    dateofbirth: { Date },
    position: { String },
    country: { String },
    films: [{ type: Schema.Types.ObjectId, ref: "Film" }],
    imgurl: { String },
  },
  { timestamps: true }
)

const CrewMemberModel = model("CrewMember", crewMemberSchema)

module.exports = CrewMemberModel
