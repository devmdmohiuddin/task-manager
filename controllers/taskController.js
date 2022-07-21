const getAllTasks = (req, res) => {
  res.send('All Tasks')
}

const getSingleTask = (req, res) => {
  res.send('Single Task')
}

const createTask = (req, res) => {
  res.send('Create Task')
}

const updateTask = (req, res) => {
  res.send('Update Task')
}

const deleteTask = (req, res) => {
  res.send('Delete Task')
}

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
}