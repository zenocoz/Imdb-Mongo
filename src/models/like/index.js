const { Schema, model } = require("mongoose")

//Note: members like other members' reviews, not films.

const likeSchema = new Schema(
  {
    memberid: { type: Schema.Types.ObjectId, ref: "Member" },
    reviewid: { type: Schema.Types.ObjectId, ref: "Review" },
  },
  { timestamps: true }
)

const likeModel = model("Like", likeSchema)

module.exports = likeModel
