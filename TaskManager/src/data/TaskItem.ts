import { type TaskItem } from "../types/Task";

export const MOCK_TASKS: TaskItem[] = [
  {
    id: "1",
    title: "Finish React Project",
    description: "Complete all required tasks in the current React project, including bug fixes and UI improvements. Focus on implementing the task filtering feature.",
    completed: false,
    status: "in-progress",
    dueDate: new Date("2023-12-31"),
    priority: "high",
  },
  {
    id: "2",
    title: "Buy Groceries",
    description: "Milk, bread, eggs, vegetables, and fruits. Also, remember to pick up some coffee beans and snacks.",
    completed: true,
    status: "completed",
    dueDate: new Date("2023-11-15"),
    priority: "medium",
  },
  {
    id: "3",
    title: "Workout at the Gym",
    description: "Full body strength training, including warmup and stretching. Target chest, back, and legs.",
    completed: false,
    status: "pending",
    dueDate: new Date("2023-11-20"),
    priority: "low",
  },
  {
    id: "4",
    title: "Schedule Dentist Appointment",
    description: "Call the dentist's office to schedule a routine check-up and cleaning.",
    completed: false,
    status: "pending",
    dueDate: new Date("2023-11-25"),
    priority: "medium",
  },
  {
    id: "5",
    title: "Plan Weekend Trip",
    description: "Research destinations, book accommodation, and plan activities for the upcoming weekend getaway.",
    completed: false,
    status: "pending",
    dueDate: new Date("2023-12-01"),
    priority: "high",
  },
];