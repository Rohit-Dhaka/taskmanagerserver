// const Task = require("../../models/Task.js");

// async function getUserTasks(req, res) {
//   try {
//     // Get user ID from token
//     const userId = req.user.id;

//     // Find tasks assigned to this user
//     const tasks = await Task.find({ userId });

//     return res.status(200).json({
//       msg: "User tasks retrieved successfully",
//       tasks,
//     });
//   } catch (error) {
//     console.error("Error fetching tasks:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// }

// module.exports = { getUserTasks };

const Task = require("../../models/Task.js");

async function getUserTasks(req, res) {
  try {
    console.log("User object from middleware:", req.user); // Debugging

    if (!req.user || !req.user._id) {
      return res.status(400).json({ error: "User ID missing in request" });
    }

    const userId = req.user._id; // Ensure `_id` exists
    const tasks = await Task.find({ userId });

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
