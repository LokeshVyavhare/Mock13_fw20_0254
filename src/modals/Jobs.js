const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  location:{
    type: String,
    required:true
  },
  contract:{
    type: String,
    required:true,
  }
});

const Job = mongoose.model("job", jobSchema);
module.exports = Job;