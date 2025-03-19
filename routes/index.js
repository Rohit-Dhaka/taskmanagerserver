const express = require("express");
const routes = express.Router();
const userRoutes = require("./useRoutes.js");
const taskRoutes = require("./taskRoutes.js");


routes.use("/auth", userRoutes);
routes.use("/task", taskRoutes);

module.exports = routes;
