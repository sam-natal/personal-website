const express = require("express");
const parser = require("body-parser");
const app = express();
app.use(parser.urlencoded({ extend: true }));
app.use("/assets", express.static(__dirname + "/assets"));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  res.send(req.body.name);
});

app.get("/work", function (req, res) {
  res.sendFile(__dirname + "/pages/work.html");
});

app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/pages/contact.html");
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/pages/about.html");
});

app.listen(9000, function () {
  console.log("Serve is now running on port http://localhost:9000");
});
