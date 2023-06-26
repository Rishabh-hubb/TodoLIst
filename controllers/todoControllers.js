
const db = require("../config/mongoose")
const Todo = require("../model/ToDo")



//HomePage Controllers  
module.exports.home = async function(req,res){
    let todo= await Todo.find({})
    console.log(req.body);
    return res.render('index',{
        'todo':todo,
    })
}


// Creating Todo Item
module.exports.createTodo = function(req,res){

    /*
    console.log(req.body)
    console.log(req.body["task-name"])
    */
    due_date = req.body["task-due-date"]
    dates_splitted = due_date.split('-')
    console.log(dates_splitted)

    const date = new Date()
    let day = date.getDate()
    let month =date.getMonth() + 1
    let year =date.getFullYear()

    // Condition to check the date entered is less than today date if so raise alert.
    if (parseInt(dates_splitted[0]) >= year){
        if (parseInt(dates_splitted[1]) + 1>= month){
            if(parseInt(dates_splitted[2]) >= day){
                
            }
            else{
                return res.redirect("/")

    
            }

        }
        else{
            return res.redirect("/")

        }
    }
    else{
        return res.redirect("/")

    }
    // modifiying the date format.

    date.setMonth(parseInt(dates_splitted[1]) - 1)
    day = parseInt(dates_splitted[2])
    month = date.toLocaleString('en-US', { month: 'long' });
    console.log(month)
    new_date = `${month} ${day}, ${dates_splitted[0]}`
    console.log(new_date)


    // creating todo
    Todo.create({
        task_name:req.body["task-name"],
        task_category:req.body["task-category"],
        task_due_date:new_date,
    })


    return res.redirect("/")


}


// Delete Todo item

module.exports.deleTodo = async function(req,res){
    let  id = req.params.id
    await Todo.findByIdAndDelete(id)
    return res.redirect("/")
}
