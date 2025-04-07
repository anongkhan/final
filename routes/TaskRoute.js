// routes/TaskRoute.js
const express = require("express");
const router = express.Router();
const taskController = require("../controllers/Tasks");

// GET all tasks
router.get("/", taskController.getAllTasks);

// POST a new task
router.post("/", taskController.createTask);

// PUT (update) a task by ID
router.put("/:id", taskController.updateTask);

// DELETE a task by ID
router.delete("/:id", taskController.deleteTask);

module.exports = router;
