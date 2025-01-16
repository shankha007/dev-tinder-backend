const express = require("express");

const { userAuth } = require("../middlewares/auth");

const profileRouter = express.Router();

// Access profile page of logged in user
profileRouter.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;

    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

module.exports = profileRouter;
