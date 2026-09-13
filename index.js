const express = require('express');
const app = express();
const port = 3000;

const todos = [
  { id: 1, task: "Buy groceries", completed: false },
  { id: 2, task: "Clean the house", completed: true },
  { id: 3, task: "Finish homework", completed: false }
];

app.listen(port, () => {
  console.log(`Hi Ankit, server is now running on http://localhost:${port}`);
}); 


app.get("/todos", (request, response) => {
  response.json(todos);
});

