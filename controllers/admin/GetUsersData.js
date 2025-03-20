const User = require("../../models/User.js")
const Task = require("../../models/Task.js")
async function GetUserforAdmin(req,res){
  const user = await User.find()
  const task = await Task.find()
  return res.status(201).json({message:"users data get succesfully"},user,task)

}
module.exports = GetUserforAdmin;