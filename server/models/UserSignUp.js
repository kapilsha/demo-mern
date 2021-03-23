const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSignup = new mongoose.Schema({
  FirstName: {
    type: String,
  },
  LastName: {
    type: String,
  },
  Phone: {
    type: Number,
  },
  Email: {
    type: String,
  },
  Password: {
    type: String,
  },
  CPassword: {
    type: String,
  },
}, {timestamps : true});

// Hashing the password

userSignup.pre("save", async function save(next) {
  try {
    if (!this.isModified("Password")) return next();
    this.Password = await bcryptjs.hash(this.Password, 12);
    this.CPassword = await bcryptjs.hash(this.CPassword, 12);

    return next();
  } catch (error) {
    return next(error);
  }
});

module.exports = mongoose.model("userSignupSchema", userSignup);
