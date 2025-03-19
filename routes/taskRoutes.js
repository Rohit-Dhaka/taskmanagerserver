const express = require("express");
const taskRoutes = express.Router();
const { addtask } = require("../controllers/Task/index.js");
const verifyToken = require("../middlewares/VerifyToken.js")

taskRoutes.post("/addtask", verifyToken, addtask);

module.exports = taskRoutes;
