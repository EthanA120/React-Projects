import { useParams, Link } from "react-router-dom";
import { Container, Typography, Button, Box, Paper, Divider, Chip, Stack, IconButton } from "@mui/material";
import { type TaskItem } from "../types/Task";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import useTasks from "../hooks/useTasks";

function TaskSpecPage() {
    const { id } = useParams<{ id: string }>();
    const { tasks, handleLikeTask, handleDislikeTask } = useTasks();
    const task = tasks.find((t) => t.id === id);

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

                    <Stack direction="row" spacing={4} sx={{ justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Box sx={{ display: 'flex', direction: 'row', gap: 1 }}>
                                <Typography variant="subtitle2" color="text.secondary">Priority:</Typography>
                                <Typography variant="body1" sx={{ textTransform: 'capitalize' }}>
                                    {task.priority}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', direction: 'row', gap: 1 }}>
                                <Typography variant="subtitle2" color="text.secondary">Due Date:</Typography>
                                <Typography variant="body1">
                                    {task.dueDate instanceof Date
                                        ? task.dueDate.toLocaleDateString('en-US')
                                        : new Date(task.dueDate).toLocaleDateString('en-US')}
                                </Typography>
                            </Box>
                        </Box>

                        {/* Like and Dislike buttons */}
                        <Box sx={{ display: 'flex', direction: 'row', gap: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <IconButton color="primary" onClick={() => handleLikeTask(task.id)}>
                                <ThumbUpIcon />
                            </IconButton>
                            <Typography variant="body1" sx={{ fontWeight: 600 }}>{task.likes}</Typography>
                            <IconButton color="error" onClick={() => handleDislikeTask(task.id)}>
                                <ThumbDownIcon />
                            </IconButton>
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