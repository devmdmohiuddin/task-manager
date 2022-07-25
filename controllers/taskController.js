const Task = require("../models/TaskModel");
const asyncWrapper = require("../middlewares/asyncWrapperMiddleware");
const createCustomError = require('../errors/customError')

const getAllTasks = asyncWrapper(async (_, res) => {
  const tasks = await Task.find({});
  res
    .status(200)
    .json({ status: "success", data: { tasks, amountOfTasks: tasks.length } });
});

const getSingleTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return next(createCustomError(`No work with id: ${taskID}`, 404))
  }

  res.status(200).json({ status: "success", data: { task } });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ status: "success", data: { task } });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError(`No work with id: ${taskID}`, 404))
  }
  res.status(200).json({ status: "success", data: { task } });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    return next(createCustomError(`No work with id: ${taskID}`, 404))
  }

  res.status(200).json({ status: "success", data: { task } });
});

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
