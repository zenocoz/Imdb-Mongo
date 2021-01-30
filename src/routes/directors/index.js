const express = require("express")
const mongoose = require("mongoose")
const DirectorModel = require("./schema")

const router = express.Router()

router.post("/", async (req, res, next) => {
  try {
    const newDirector = new DirectorModel(req.body)
    const { _id } = await newDirector.save()
    res.status(201).send(_id)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

module.exports = router
