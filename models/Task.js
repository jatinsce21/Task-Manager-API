const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "must enter a name..."], //these are used for validations in a database like some constraints when enetering the data
    trim: true,
    minlength: [3, "must be minimum of 3 characters...."],
    maxlength: [20, "name must not be greter than 20 characters..."],
  },
  completed: {
    type: String,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
