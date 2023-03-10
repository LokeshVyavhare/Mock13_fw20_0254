const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name:{
    type: String,
    required:true
  },
  role:{
    type: String,
    required:true,
    enum:["admin", "user"]
  }
});

const User = mongoose.model("user", userSchema);
module.exports = User;