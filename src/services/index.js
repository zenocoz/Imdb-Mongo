const express = require("express")
const router = express.Router()
const filmsRouter = require("./films")
const directorsRouter = require("./directors")
const actorsRouter = require("./actors")

router.use("/films", filmsRouter)
router.use("/directors", directorsRouter)
router.use("/actors", actorsRouter)

module.exports = router
