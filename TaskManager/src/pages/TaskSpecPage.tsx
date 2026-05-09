import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import Task from "../components/Task";
import { MOCK_TASKS } from "../data/TaskItem";
import { type TaskItem } from "../types/Task";


function TaskSpecPage() {
    // Extract the ID from the URL (e.g., from the path /tasks/1)
    const [task, setTask] = useState<TaskItem | undefined>();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        // Search for the task only when the id changes or the component mounts
        const foundTask = MOCK_TASKS.find((t) => t.id === id);
        setTask(foundTask);
    }, [id]); // Dependency array ensures the code runs only if the id changed

    // If the task was not found (e.g., if the ID is incorrect in the URL)
    if (!task) {
        return (
            <Container sx={{ py: 4, textAlign: 'center' }}>
                <Typography variant="h5">המשימה לא נמצאה</Typography>
                <Button component={Link} to="/tasks" variant="outlined" sx={{ mt: 2 }}>
                    חזרה לרשימה
                </Button>
            </Container>
        );
    }

    return (
        <Container maxWidth="sm" sx={{ py: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                פרטי המשימה המלאים
            </Typography>
            {/* Use the Task component to display all information (title, description, and checkbox) */}
            <Task
                id={task.id}
                title={task.title}
                description={task.description}
                completed={task.completed}
                onToggleComplete={() => { }} // Currently an empty function because this is a display page
            />
            <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button component={Link} to="/tasks" variant="text">
                    חזרה לרשימה המלאה
                </Button>
            </Box>
        </Container>
    );
}

export default TaskSpecPage;