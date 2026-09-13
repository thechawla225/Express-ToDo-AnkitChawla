
const router = require("express").Router();
const { v4 } = require('uuid');


router.get("/todos", (request, response) => {
    console.log("Get request received for /todos");
    return response.json(todos);
});


router.get("/", (request, response) => {
    console.log("Get request received for homepage");
    return response.send("Hi Ankit, welcome to the Todo routerlication");
  
});


router.post()("/add", (request, response) => {
    
    console.log("Post request received for /add");
    const { title } = request.body;
    const newTodo = { id: v4(), task: title, completed: false };
    todos.push(newTodo);
    return response.status(201).json(newTodo);
});



module.exports = router;