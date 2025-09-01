import taskService from "../services/tasks";
import "./AddTask.css";

const AddTask = ({ newTask, setNewTask, tasks, setTasks }) => {
  const handleTaskAdd = (event) => {
    event.preventDefault();
    taskService.addTask({ name: newTask }).then((response) => {
      console.log(response.data);
      setTasks(tasks.concat(response.data));
      setNewTask("");
    });
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setNewTask(event.target.value);
  };

  return (
    <div className="add-task-container">
      <h2>Add a new task</h2>
      <form onSubmit={handleTaskAdd} className="add-task-form">
        <input
          value={newTask}
          name="addTask"
          onChange={handleChange}
          placeholder="e.g. Buy groceries"
          className="add-task-input"
        />
        <button type="submit" className="add-task-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
