const express = require("express");
const Signuprouter = express.Router();
const usersignupschema = require("../models/UserSignUp");

Signuprouter.post("/signup", async (req, res) => {
  const newUserSignup = new usersignupschema({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Phone: req.body.Phone,
    Email: req.body.Email,
    Password: req.body.Password,
    CPassword: req.body.CPassword,
  });

  await newUserSignup
    .save()
    .then(() => console.log("Successfully Inserted"))
    .catch((err) => {
      console.log(err);
    });
  console.log(newUserSignup);
  res.send("Psted");
});

Signuprouter.post("/login", (req, res) => {
  const follar =req.body;
  res.send(follar);
});

module.exports = Signuprouter;
