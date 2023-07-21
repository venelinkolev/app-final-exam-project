const express = require("express");
const router = express.Router();
const { auth } = require("../utils");
const { recipeController, postController } = require("../controllers");

// middleware that is specific to this router

router.get("/", recipeController.getThemes);
router.post("/new-recipe", auth(), recipeController.createTheme);

router.get("/:themeId", recipeController.getTheme);
router.post("/:themeId", auth(), postController.createPost);
router.put("/:themeId", auth(), recipeController.subscribe);
router.put("/:themeId/posts/:postId", auth(), postController.editPost);
router.delete("/:themeId/posts/:postId", auth(), postController.deletePost);

// router.get('/my-trips/:id/reservations', auth(), recipeController.getReservations);

module.exports = router;
