const express = require("express");
const taskRoutes = express.Router();
const { addtask } = require("../controllers/Task/index.js");


taskRoutes.post("/addtask", addtask);

module.exports = taskRoutes;
