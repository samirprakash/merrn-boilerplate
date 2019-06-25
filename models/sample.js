const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// setup sample schema
const SampleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Sample = mongoose.model("sample", SampleSchema);
