const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

let tasks = [
  { id: 1, name: "call mum" },
  { id: 2, name: "do laundry" },
  { id: 3, name: "wash hair" },
];

app.get("/", (request, respose) => {
  respose.send("<h1>Kaisa's to-do-app</h1>");
});

app.get("/tasks", (request, response) => {
  response.json(tasks);
});

app.get("/tasks/:id", (request, response) => {
  const id = Number(request.params.id);
  const task = tasks.find((task) => task.id === id);

  if (task) {
    response.json(task);
  } else {
    response.status(404).end();
    console.log(task);
  }
});

app.post("/tasks", (request, response) => {
  const task = request.body;
  console.log(request.body);
  if (task === undefined) {
    response.status(404).json("no task specified");
  }
  const taskObject = {
    id: Date.now(),
    name: task.name,
  };
  tasks = tasks.concat(taskObject);
  response.json(taskObject);
});

app.delete("/tasks/:id", (request, response) => {
  const id = request.params.id;
  tasks.filter((task) => task.id !== id);
  response.status(204).end();
});

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
