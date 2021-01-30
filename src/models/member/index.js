const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const memberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    membername: { type: String },
    image: {
      type: String,
      default:
        "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-24.jpg",
    },
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Film" }],
    watched: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Film", type: Number },
    ],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "Member" }],
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member",
      },
    ],
  },
  { timestamp: true }
)

/**
 * Enyrcyp member password before saving DB
 */
memberSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  } catch (error) {
    console.log("Bcryp hash error: ", error)
    next(error)
  }
})

/**
 * Checks entered password and hashed password in DB
 * returns boolean
 * @param {String} enteredPassword
 */
memberSchema.methods.isValidPassword = async function (enteredPassword) {
  try {
    return await bcrypt.compare(enteredPassword, this.password)
  } catch (error) {
    console.log("Bcrypt password check error: ", error)
    next(error)
  }
}

const member = mongoose.model("member", memberSchema)
module.exports = member
