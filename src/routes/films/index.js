const router = require("express").Router()
const cloudinaryMulter = require("../../middlewares/cloudinary")

const { addFilm } = require("../../controller/filmsController")
const { filmSchema, validateBody } = require("../../middlewares/validator")

router.post("/", validateBody(filmSchema), addFilm)
// router.get("/", get);
// router.get("/:postId", getSinglePost);
// router.put("/:postId", validateBody(postSchema), modifyPost);
// router.delete("/:postId", deletePost);
// router.post("/:postId/picture", cloudinaryMulter.single("post"), postImage);

module.exports = router
