import axios from "axios";
const baseUrl = "http://localhost:3005/tasks";

const getAll = () => {
  return axios.get(baseUrl);
};

const addTask = (taskObject) => {
  return axios.post(baseUrl, taskObject);
};

const removeTask = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default { getAll, addTask, removeTask };
