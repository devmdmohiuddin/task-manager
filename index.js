const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const taskRoutes = require("./routes/taskRoutes");
const connectDB = require('./config/db')
const notFound = require('./middlewares/notFoundMiddleware')

const app = express();

// database
connectDB()

// middleware
app.use(express.json())
app.use(morgan("dev"));

// routes
app.use("/api/v1/tasks", taskRoutes);

app.use(notFound)

app.get("/", (_, res) => {
  res.send("Api is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running in development mode on port ${PORT}.`);
});
