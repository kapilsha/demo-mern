const express = require("express");
const loginrouter = express.Router();
const loginschema = require("../models/LoginSchema");
const usersignupschema = require("../models/UserSignUp");
const bcryptjs = require("bcryptjs");

loginrouter.post("/login", async (req, res) => {
  try {
    const { Email, Password } = req.body;
    if (!Email || !Password) {
      return res.status(400).send("Please fill the data");
    }

    const userLogin = await usersignupschema.findOne({ Email: Email });

    if (userLogin) {
      const isMatch = await bcryptjs.compare(Password, userLogin.Password);

      if (!isMatch) {
        res.status(400).send("User not find");
        console.log("user not found");
      } else {
        res.send("user login successully");
        console.log("User login successfully");
      }
    } else {
        console.log("Invalid cradentials");
      res.send("Inivaild cradentials");
    }
  } catch (error) {
    console.log(error);
  }

  //   await newUserLogin
  //     .save()
  //     .then(() => {
  //       console.log("Login succesfully");
  //       console.log(newUserLogin);
  //     })
  //     .catch((er) => console.log(er));
  //     res.send("Login successflly");
});

module.exports = loginrouter;
