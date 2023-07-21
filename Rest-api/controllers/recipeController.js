const { recipeModel } = require("../models");
const { newPost } = require("./postController");

function getThemes(req, res, next) {
  recipeModel
    .find()
    .populate("userId")
    .then((themes) => res.json(themes))
    .catch(next);
}

function getTheme(req, res, next) {
  const { themeId } = req.params;

  recipeModel
    .findById(themeId)
    .populate({
      path: "posts",
      populate: {
        path: "userId",
      },
    })
    .then((theme) => res.json(theme))
    .catch(next);
}

function createTheme(req, res, next) {
  const {
    recipeName,
    imageUrl,
    ingredients,
    prepTime,
    cookTime,
    totalTime,
    servings,
    //themeName,
    //postText
  } = req.body; //themeName, postText
  const { _id: userId } = req.user;

  recipeModel
    .create({
      //themeName,
      recipeName,
      imageUrl,
      ingredients,
      prepTime,
      cookTime,
      totalTime,
      servings,
      userId,
      subscribers: [userId],
    })
    // .then((theme) => {
    //   newPost(postText, userId, theme._id).then(([_, updatedTheme]) =>
    //     res.status(200).json(updatedTheme)
    //   );
    // })
    .catch(next);
}

function subscribe(req, res, next) {
  const themeId = req.params.themeId;
  const { _id: userId } = req.user;
  recipeModel
    .findByIdAndUpdate(
      { _id: themeId },
      { $addToSet: { subscribers: userId } },
      { new: true }
    )
    .then((updatedTheme) => {
      res.status(200).json(updatedTheme);
    })
    .catch(next);
}

module.exports = {
  getThemes,
  createTheme,
  getTheme,
  subscribe,
};
