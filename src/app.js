const express = require("express");

const app = express();

app.get("/getUserData", (req, res) => {
  throw new Error("SHHHDADKPASD");
  res.send("Got User Data");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong");
  }
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
});
