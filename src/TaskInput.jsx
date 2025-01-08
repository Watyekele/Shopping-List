import React from "react";
import { useState } from "react";

function TaskInput({ addTask }) {
  const [newtask, setnewTask] = useState("");

  const handleTask = () => {
    addTask(newtask);
    setnewTask("");
  };

  return (
    <div>
      <input
        type="text"
        value={newtask}
        onChange={(e) => setnewTask(e.target.value)}
      />
      <button onClick={handleTask}>Add Task</button>
    </div>
  );
}
export default TaskInput;
