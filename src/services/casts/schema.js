const { Schema, model } = require("mongoose")

const castSchema = new Schema({}, { timestamps: true })

const CastModel = model("Cast", castSchema)

module.exports = CastModel
