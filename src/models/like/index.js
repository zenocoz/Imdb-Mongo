const { Schema, model } = require("mongoose")

//Note: members like other members' reviews, not films.

const likeSchema = new Schema(
  {
    member: { type: Schema.Types.ObjectId, ref: "Member" },
    review: { type: Schema.Types.ObjectId, ref: "Review" },
  },
  { timestamps: true }
)

const likeModel = model("Like", likeSchema)

module.exports = likeModel
