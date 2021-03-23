const mongoose = require("mongoose");

const dbURL =
  "mongodb+srv://demowebsite:demoo@cluster0.tjsgn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const conn = mongoose
  .connect(dbURL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Database connection successsfully"))
  .catch((err) => console.log(err));


  module.exports = conn