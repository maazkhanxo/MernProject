const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  email: String,
  mobile: Number,
  project: String,
});

module.exports = mongoose.model("user", UserSchema);
