const express = require("express")
const router = express.Router()
const filmsRouter = require("../routes/films")
const actorsRouter = require("../routes/actors")
const crewMembersRouter = require("../routes/crewMembers")
const reviewsRouter = require("../routes/reviews")

router.use("/films", filmsRouter)
router.use("/actors", actorsRouter)
// router.use("/crewMembers", crewMembersRouter)
// router.use("/reviews", rewiewsRouter)

module.exports = router
