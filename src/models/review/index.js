const { Schema, model } = require("mongoose")

const reviewSchema = new Schema(
  {
    member: { type: Schema.Types.ObjectId, ref: "Member" },
    text: { type: String, required: true },
    filmid: { type: Schema.Types.ObjectId, ref: "Film" },
    likes: [{ type: Schema.Types.ObjectId, ref: "Like" }],
  },
  { timestamps: true }
)

const reviewModel = model("Review", reviewSchema)

module.exports = reviewModel
