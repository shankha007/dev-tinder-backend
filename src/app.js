const express = require("express");

const app = express();

// This will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

// This will only handle POST calls to /user
app.post("/user", (req, res) => {
  console.log("Saved data to the database");
  res.send("Data successfully saved to the database");
});

// This will only handle GET calls to /user
app.get("/user", (req, res) => {
  res.send({ firstName: "Shankha", lastName: "Das" });
});

app.delete("/user", (req, res) => {
  res.send("Deleted successfully");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
});
