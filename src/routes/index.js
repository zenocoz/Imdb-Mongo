const express = require("express")
const router = express.Router()
const filmsRouter = require("../routes/films")
const actorsRouter = require("../routes/actors")
const crewMembersRouter = require("../routes/crewMembers")
const reviewsRouter = require("../routes/reviews")
const externalFilmApi = require("../routes/externalFilmApi")

router.use("/films", filmsRouter)
router.use("/actors", actorsRouter)
// router.use("/crewMembers", crewMembersRouter)
// router.use("/reviews", rewiewsRouter)

router.use("/externalFilmApi", externalFilmApi)

module.exports = router
