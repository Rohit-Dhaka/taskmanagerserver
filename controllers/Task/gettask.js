const Task = require("../../models/Task.js");


async function getTasks(req, res) {
  try {
    const userId = req.user.id; 
    const tasks = await Task.find({ userId });
    if (!tasks || tasks.length === 0) {
      return res.status(404).json({ msg: "No tasks found" });
    }
    return res.status(200).json({ tasks });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { getTasks };
