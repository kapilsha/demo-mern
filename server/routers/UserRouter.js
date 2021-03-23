const express = require("express");
const { db } = require("../models/userSchema");
const router = express.Router();
const userschema = require("../models/userSchema");

router.post("/", async (req, res) => {
  try {
    const userdata = new userschema({
      names: req.body.names,
      email: req.body.email,
      password: req.body.password,
      Cpassword: req.body.Cpassword,
    });
    await userdata
      .save()
      .then((result) => {console.log(result); 
        console.log("Data inserted successfully")})
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
});

router.get("/", (req, res) => {
  res.send("ds");
});

module.exports = router;
