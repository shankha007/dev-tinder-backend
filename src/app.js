const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("Route Handler 1");
    next();
    // res.send("Response 1");
  },
  (req, res, next) => {
    console.log("Route Handler 2");
    next();
    // res.send("Response 2");
  },
  (req, res, next) => {
    console.log("Route Handler 3");
    next();
    // res.send("Response 3");
  },
  (req, res, next) => {
    console.log("Route Handler 4");
    res.send("Response 4");
    // next();
  }
);

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
});
