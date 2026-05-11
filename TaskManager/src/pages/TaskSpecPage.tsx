import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Typography, Button, Box, Paper, Divider, Chip, Stack } from "@mui/material";
import { MOCK_TASKS } from "../data/TaskItem";
import { type TaskItem } from "../types/Task";


function TaskSpecPage() {
    // Extract the ID from the URL (e.g., from the path /tasks/1)
    const [task, setTask] = useState<TaskItem | undefined>();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        // Search for the task in localStorage
        const savedTasksString = localStorage.getItem("task_manager_tasks");
        const tasks: TaskItem[] = savedTasksString ? JSON.parse(savedTasksString) : MOCK_TASKS;
        
        const foundTask = tasks.find((t) => t.id === id);
        setTask(foundTask);
    }, [id]); // Dependency array ensures the code runs only if the id changed

    const getStatusConfig = (status: TaskItem['status']) => {
        switch (status) {
            case "pending":
                return { label: "Pending", color: "error" as const }; // Red
            case "in-progress":
                return { label: "In Progress", color: "warning" as const }; // Yellow/Orange
            case "completed":
                return { label: "Completed", color: "success" as const }; // Green
            default:
                return { label: status, color: "default" as const };
        }
    };

    // If the task was not found (e.g., if the ID is incorrect in the URL)
    if (!task) {
        return (
            <Container sx={{ py: 4, textAlign: 'center' }}>
                <Typography variant="h5">Task not found</Typography>
                <Button component={Link} to="/tasks" variant="outlined" sx={{ mt: 2 }}>
                    Back to list
                </Button>
            </Container>
        );
    }

    return (
        <Container maxWidth="sm" sx={{ py: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Full Task Details
            </Typography>

            <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                <Stack spacing={3}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>{task.title}</Typography>
                        <Chip 
                            label={getStatusConfig(task.status).label} 
                            color={getStatusConfig(task.status).color} 
                            variant="filled" 
                        />
                    </Box>

                    <Divider />

                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">Description:</Typography>
                        <Typography variant="body1">{task.description}</Typography>
                    </Box>

                    <Stack direction="row" spacing={4}>
                        <Box>
                            <Typography variant="subtitle2" color="text.secondary">Priority:</Typography>
                            <Typography variant="body1" sx={{ textTransform: 'capitalize' }}>
                                {task.priority}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" color="text.secondary">Due Date:</Typography>
                            <Typography variant="body1">
                                {task.dueDate instanceof Date 
                                    ? task.dueDate.toLocaleDateString('en-US') 
                                    : new Date(task.dueDate).toLocaleDateString('en-US')}
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
            </Paper>

            <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button component={Link} to="/tasks" variant="text">
                    Back to full list
                </Button>
            </Box>
        </Container>
    );
}

export default TaskSpecPage;