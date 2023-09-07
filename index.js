const express = require("express");
const port = 8000;
const path = require("path");
const app = express();

app.use(express.static(__dirname));
console.log(__filename);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("server is runing on port", port);
  }
});
