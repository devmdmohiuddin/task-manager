const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    maxLength: [20, "Name can not be more then 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true
});

const Task = model("Task", taskSchema);

module.exports = Task;
