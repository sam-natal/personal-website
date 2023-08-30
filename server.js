const express = require("express");
const parser = require("body-parser");
const app = express();
app.use(parser.urlencoded({ extend: true }));
app.use("/assets", express.static(__dirname + "/assets"));
app.use(express.static(__dirname + "/node_modules/bootstrap/dist"));

const nodemailer = require("nodemailer");
const { body, validationResult } = require("express-validator");
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
  [
    body("name").trim().notEmpty().escape(),
    body("email").isEmail().normalizeEmail(),
    body("subject").trim().notEmpty().escape(),
    body("message").trim().notEmpty().escape(),
  ],
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
        console.error(error);
        console.log(error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent: " + info.response);
        res.send("Email sent successfully");
      }
    });
  }
);

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/pages/about.html");
});

app.listen(9000, function () {
  console.log("Serve is now running on port http://localhost:9000");
});
