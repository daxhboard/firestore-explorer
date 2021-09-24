const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(Math.floor(Math.random() * 100) + 1);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
