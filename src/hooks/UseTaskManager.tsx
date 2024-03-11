import { useState } from "react";
import { nanoid } from "nanoid";

interface Task {
  id: string;
  title: string;
}

export const useTaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const addTask = (title: string): void => {
    if (title.length < 1) {
      return;
    }
    const newTask: Task = {
      id: nanoid(),
      title,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id: string): void => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const updateTask = (id: string, updatedTask: Task): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      )
    );
  };

  const handleSearch = (keyword: string): void => {
    setSearchKeyword(keyword);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return {
    tasks: filteredTasks,
    searchKeyword,
    addTask,
    deleteTask,
    updateTask,
    handleSearch,
  };
};
