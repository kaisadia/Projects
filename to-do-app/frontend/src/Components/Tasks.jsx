import "./Tasks.css";
import DeleteTask from "./DeleteTask";

const Tasks = ({ tasks, setTasks }) => {
  return (
    <div>
      <ul className="tasks-container">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span className="task-name">{task.name}</span>
            <DeleteTask id={task.id} tasks={tasks} setTasks={setTasks} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
