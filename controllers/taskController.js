const Task = require("../models/TaskModel");

const getAllTasks = (req, res) => {
  res.send("All Tasks");
};

const getSingleTask = (req, res) => {
  res.send("Single Task");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json(error)
  }
};

const updateTask = (req, res) => {
  res.send("Update Task");
};

const deleteTask = (req, res) => {
  res.send("Delete Task");
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
