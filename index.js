const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());
app.use("", require("./routes/todos"));

const todos = [];

app.listen(port, () => {
  console.log(`Hi Ankit, server is now running on http://localhost:${port}`);
}); 

