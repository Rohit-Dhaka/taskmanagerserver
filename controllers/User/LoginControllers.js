const User = require('../../models/User.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();

async function login (req,res){
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({msg:"Email invalied"})
        }
        const isPassword = await bcrypt.compare( password , user.password)
        if(!isPassword){
            return res.status(400).json({msg:"Password not match"})
        }
        const token = jwt.sign({
            _id:user._id,
            email:user.email
        }, process.env.SECRET_KEY , { expiresIn :"5d"})        
        return res.status(201).json({msg:"User Login Successfully" ,token })
    }
    catch(error){
        return res.status(500).json({error:"Internal server error"})
    }
}
module.exports = {login}