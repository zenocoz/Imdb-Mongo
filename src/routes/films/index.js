const router = require("express").Router()
const cloudinaryMulter = require("../../middlewares/cloudinary")

const {
  addFilm,
  editFilmData,
  getAllFilms,
  getFilm,
  deleteFilm,
} = require("../../controller/filmsController")
const { filmSchema, validateBody } = require("../../middlewares/validator")

router.post("/", validateBody(filmSchema), addFilm)
router.put("/:filmId", validateBody(filmSchema), editFilmData)
router.get("/", getAllFilms)
router.get("/:filmId", getFilm)
router.delete("/:filmId", deleteFilm)
// router.post("/:postId/picture", cloudinaryMulter.single("post"), postImage);

module.exports = router
