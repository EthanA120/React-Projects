import { Typography, Container, Stack, Card, CardContent, Button, Box } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MOCK_TASKS } from "../data/TaskItem";
import { type TaskItem } from "../types/Task";
import ROUTS from "../router/Routs";


function TasksPage() {
  const [tasks] = useState<TaskItem[]>(MOCK_TASKS);

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        רשימת המשימות שלי
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Button variant="contained" color="secondary" component={Link} to={ROUTS.NEW_TASK}>
          הוסף משימה חדשה
        </Button>
      </Box>
      <Stack spacing={1}>
        {tasks.map((task) => (
          <Card key={task.id} variant="outlined">
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6">{task.title}</Typography>
              <Button variant="contained" component={Link} to={`/tasks/${task.id}`}>
                לפרטים
              </Button>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}

export default TasksPage;