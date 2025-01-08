import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (tasks.trim === "") return;
    setTasks([...tasks, task]);
  };

  const deleteTask = (indexToDelete) =>
    setTasks(tasks.filter((task, index) => index !== indexToDelete));

  return (
    <div>
      <h1>My Shopping List</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
