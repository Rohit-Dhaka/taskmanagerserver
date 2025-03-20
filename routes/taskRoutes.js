const express = require("express");
const taskRoutes = express.Router();
const { addtask ,getTasks } = require("../controllers/Task/index.js");
const verifyToken = require("../middlewares/VerifyToken.js")

taskRoutes.post("/addtask", verifyToken, addtask);
taskRoutes.get("/taskget", verifyToken, getTasks);

module.exports = taskRoutes;
