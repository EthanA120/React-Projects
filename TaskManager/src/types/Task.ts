export interface TaskItem {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    status: string,
    dueDate: Date | string,
    priority: string,
    likes: number,
}