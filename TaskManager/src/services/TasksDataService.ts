import { MOCK_TASKS } from "../data/TaskItem";
import { type TaskItem } from "../types/Task";

const STORAGE_KEY = "task_manager_tasks";

export const getTasks = (): TaskItem[] => {
  const savedTasks = localStorage.getItem(STORAGE_KEY);
  return savedTasks ? JSON.parse(savedTasks) : MOCK_TASKS;
};