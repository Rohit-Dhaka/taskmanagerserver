const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
const dotenv = require("dotenv");
dotenv.config();

async function verifyToken(req, res, next) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(400).json({ message: "invalid token" });
    }
    // verifyToken
    const decoded = jwt.verify(token, process.env.secret_key);
    const user = await User.findById(decoded.id);
    req.user = decoded;
    next();
  } catch (error) {
    next(error);
    if (error.name === "JSONWEBTOKENERROR") {
      return res.status(400).json({ message: "token results error" });
    } else if (error.name === "TOKENEXPIREDERROR") {
      return res.status(400).json({ message: "token  has been expired" });
    }
  }
}

module.exports = verifyToken;
