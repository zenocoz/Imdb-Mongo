const express = require("express")
const mongoose = require("mongoose")
const ActorModel = require("../../models/actor")

const router = express.Router()

router.post("/", async (req, res, next) => {
  try {
    const newActor = new ActorModel(req.body)
    const { _id } = await newActor.save()
    res.status(201).send(_id)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

module.exports = router
