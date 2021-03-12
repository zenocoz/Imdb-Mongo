const express = require("express")
const axios = require("axios")

const router = express.Router()

const omdbApi = "http://omdbapi.com/?apikey=d541d8b3"

router.get("/", async (req, res, next) => {
  try {
    const titleSearch = "t=" + req.body.title
    const result = await axios.get(`${omdbApi}&${titleSearch}`, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
    console.log(result.data)
    res.send(result.data)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
