const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema(
    {
        task_name:{
            type:String,
            required:true
        },
        task_category:{
            type:String,
            required:true
        },
        task_due_date:{
            type:Date,
            required:true
        }
    }
    
)

const Todo = mongoose.model('Todo',todoSchema)
module.exports = Todo