const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World")
})

app.listen(8000, () => {
  console.log("Listen on port 8000")
})