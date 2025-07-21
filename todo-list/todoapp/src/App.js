import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask(""); // Clear input after adding
  };

  return (
    <div className="container">
    <div className="app">
      <h1>📝 To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((t, index) => (
          <li key={index}>• {t}</li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default App;
