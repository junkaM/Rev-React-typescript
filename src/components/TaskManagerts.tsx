import React from "react";
import { useTaskManager } from "../hooks/UseTaskManager";

export const TaskManagerts: React.FC = () => {
  const {
    tasks,
    addTask,
    deleteTask,
    updateTask,
    handleSearch,
  } = useTaskManager();

  const [title, setTitle] = React.useState<string>("");

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <div>
        <input
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search Task"
        />
      </div>
      <div className="task">
        <input
          type="text"
          value={title}
          onChange={(ev) => {
            setTitle(ev.target.value);
          }}
        />
        <button onClick={() => addTask(title)}>Add Task</button>
      </div>
      <ul className="container">
        {tasks.map((task) => (
          <li key={task.id} className="task">
            <div className="task">
              <input
                type="text"
                placeholder="Add new task"
                value={task.title}
                onChange={(e) => updateTask(task.id, { title: e.target.value })}
              />
              <button onClick={() => deleteTask(task.id)}>Done</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
