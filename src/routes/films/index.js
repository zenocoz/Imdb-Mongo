const express = require("express")
const mongoose = require("mongoose")
const FilmModel = require("./schema")

const router = express.Router()

router.post("/", async (req, res, next) => {
  try {
    const newFilm = new FilmModel(req.body)
    const { _id } = await newFilm.save()
    res.status(201).send(_id)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

module.exports = router
