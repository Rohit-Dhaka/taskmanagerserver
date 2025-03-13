const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true        
    },
    description:{
        type:String,
        required:true   
    },
    status:{
        type:String,
        enum:['Pending' , 'In Progress','Completed'],
        default:'Pending'
    },
    // createdAt:{
    //     type:Date,
    //     default:Date.now        
    // },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

const Task = mongoose.model("Task", taskSchema)