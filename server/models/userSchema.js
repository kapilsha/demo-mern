const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  names : {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  Cpassword: {
    type: String,
    require: true,
  }
  // time : { type: String, default: (new Date()).getTime() } 
});

module.exports = mongoose.model("user", userSchema);
