const Task = require("../../models/Task.js");

async function addtask(req, res) {
  try {
    const { title, description, status, deadline } = req.body;
    const userID = req.user._id;
    if (!title || !description || !deadline) {
      return res
        .status(400)
        .json({ msg: "Title, description, and deadline are required" });
    }
    const newTask = new Task({
      title,
      description,
      status: status || "Pending",
      deadline,
      user: userID,
    });

    // Save to database
    await newTask.save();

    return res.status(201).json({
      msg: "Task created successfully",
      task: newTask,
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { addtask };
