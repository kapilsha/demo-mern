const mongoose = require("mongoose");

const loginschema = new mongoose.Schema({
  Email: { type: String },
  Password: { type: String },
}, {timestamps : true});

module.exports = mongoose.model("UserLogin", loginschema);
