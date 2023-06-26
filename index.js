const express =require("express")
const bodyParser = require('body-parser')
const path = require('path')

const port = 8000; // port to run the server.


/*
const todo = [
    {'task-name':'WorkOut',
    'task-category':'Personal',
    'task-due-date':'2023-june-02'
    },
]
'
*/

app =express()

app.use(bodyParser.urlencoded({'extended':false}))
app.use(express.static('assets'))
app.use("/",require("./routes"))  // Routes 

app.set('view engine','ejs') // setting View engine
app.set('views',path.join(__dirname,'views')) // setting the view directory location.





app.listen(port,function(err){
    if(err){
        console.log("Error Ocuured");
    }
})