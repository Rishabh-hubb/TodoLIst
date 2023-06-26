const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todoControllers")


router.get("/",todoController.home)
router.post("/todo",todoController.createTodo)
router.delete("/delete/:id",todoController.deleTodo)

module.exports = router