const express = require("express");

const { adminAuth, userAuth } = require("./middlewares/auth");

const app = express();

app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res) => {
  res.send("All Data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("User Deleted");
});

app.post("/user/login", (req, res) => {
  res.send("User logged in successfully");
});

app.get("/user", userAuth, (req, res) => {
  res.send("Got User Data");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
});
