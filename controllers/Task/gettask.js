const Task = require("../../models/Task.js");
const mongoose = require("mongoose");

async function getUserTasks(req, res) {
  try {
    // Check if req.user exists and has _id
    if (!req.user || !req.user._id) {
      return res.status(400).json({ error: "User ID missing in request" });
    }

    const userId = req.user._id;

    console.log("Fetching tasks for User ID:", userId);

    // Fetch tasks where user matches userId
    const tasks = await Task.find({ user: userId });

    if (tasks.length === 0) {
      return res.status(404).json({ msg: "No tasks found for this user" });
    }

    return res.status(200).json({
      msg: "User tasks retrieved successfully",
      tasks,
    });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { getUserTasks };
