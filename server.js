const express = require("express");
const parser = require("body-parser");
const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(express.json()); // Parse JSON request bodies
app.use("/assets", express.static(__dirname + "/assets"));
app.use(express.static(__dirname + "/node_modules/bootstrap/dist"));

const nodemailer = require("nodemailer");
const { validationResult } = require("express-validator");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

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

app.post(
  "/contact",
  function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, subject, message } = req.body;

    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: subject,
      text: `From: ${name} <${email}>\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(500).send("Error sending email");
      } else {
        res.send("Email sent successfully");
      }
    });
  }
);

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/pages/about.html");
});

app.get("/creative_art_box", function (req, res) {
  res.sendFile(__dirname + "/pages/projects/creative_art_box.html");
});

app.get("/movie_point", function (req, res) {
  res.sendFile(__dirname + "/pages/projects/movie_point.html");
});

app.get("/vicoba_app", function (req, res) {
  res.sendFile(__dirname + "/pages/projects/vicoba_app.html");
});

app.listen(9000, function () {
  console.log("Serve is now running on port http://localhost:9000");
});
