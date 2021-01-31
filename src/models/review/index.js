const { Schema, model } = require("mongoose")

const reviewSchema = new Schema(
  {
    memberid: { type: Schema.Types.ObjectId, ref: "Member" },
    text: { type: String },
    filmid: { type: Schema.Types.ObjectId, ref: "Film" },
    likes: [{ type: Schema.Types.ObjectId, ref: "Like" }],
    image: { type: String },
  },
  { timestamps: true }
)

const reviewModel = model("Review", reviewSchema)

module.exports = reviewModel
