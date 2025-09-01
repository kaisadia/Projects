import "./App.css";
import Tasks from "./Components/tasks";
import AddTask from "./Components/AddTask";
import { useState, useEffect } from "react";
import taskService from "./services/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    taskService.getAll().then((response) => {
      setTasks(response.data);
    });
  }, []);

  return (
    <>
      <AddTask
        newTask={newTask}
        setNewTask={setNewTask}
        tasks={tasks}
        setTasks={setTasks}
      />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
