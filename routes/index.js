const express = require("express");
const routes = express.Router();
const userRoutes = require("./useRoutes.js");
const taskRoutes = require("./taskRoutes.js");
const verifyToken = require("../middlewares/VerifyToken.js");

routes.use("/auth", userRoutes);
routes.use("/task", verifyToken, taskRoutes);

module.exports = routes;
