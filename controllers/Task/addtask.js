const Task = require('../../models/Task.js');

async function addtask(req, res) {
    try {
        const { title, description, status } = req.body;            
        if (!title || !description || !status ) {
            return res.status(400).json({ msg: "All fields are required" });
        }                                
        const createtask = await Task.create({title,description,status});        
        return res.status(201).json({ msg: "Task created successfully", task: createtask });

    } catch (error) {        
        return res.status(500).json({ error: "Internal server error " });
    }
}

module.exports = { addtask };
