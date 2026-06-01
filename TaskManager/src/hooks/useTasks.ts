import { type TaskItem } from "../types/Task";
import { useState, useEffect } from "react";
import { getTasks } from "../services/TasksDataService";


function useTasks() {
  const [tasks, setTasks] = useState<TaskItem[]>(getTasks);
  const [isOpen, setIsOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<TaskItem | undefined>(
    undefined,
  );

  useEffect(() => {
    localStorage.setItem("task_manager_tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleToggle() {
    setEditingTask(undefined);
    setIsOpen((prev) => !prev);
  }

  const handleEdit = (task: TaskItem) => {
    setEditingTask(task);
    setIsOpen(true);
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    setIsOpen(false);
  };

  const handleSaveTask = (taskData: TaskItem) => {
    if (editingTask) {
      // Update existing task
      setTasks((prev) =>
        prev.map((t) =>
          t.id === editingTask.id ? { ...taskData, id: t.id } : t,
        ),
      );
    } else {
      // Add new task
      const newTask = {
        ...taskData,
        id: crypto.randomUUID(),
        likes: 0,
      };
      setTasks((prev) => [...prev, newTask]);
    }
    setIsOpen(false);
  };

  const handleLikeTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, likes: (t.likes || 0) + 1 } : t)),
    );
  };

  const handleDislikeTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, likes: (t.likes || 0) - 1 } : t,
      ),
    );
  };

  return { tasks, isOpen, setIsOpen, handleToggle, handleEdit, handleDeleteTask, handleSaveTask, editingTask, handleLikeTask, handleDislikeTask };
}

export default useTasks;
