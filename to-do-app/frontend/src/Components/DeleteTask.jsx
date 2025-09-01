import taskService from "../services/tasks";
import "./Tasks.css";

const DeleteTask = ({ setTasks, tasks, id }) => {
  const deleteHandler = () => {
    console.log(`deleted ${id}`);
    taskService.removeTask(id).then((response) => console.log(response));
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <button onClick={deleteHandler} className="delete-button">
        ✕ Delete
      </button>
    </div>
  );
};

export default DeleteTask;
