import { Typography, Container, Stack, Card, CardContent, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

// הגדרה איך נראית משימה אחת
export interface TaskItem {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

// נתוני המשימות (הוצאנו החוצה כדי שנוכל להשתמש בהם גם בעמוד הפירוט)
export const MOCK_TASKS: TaskItem[] = [
  {
    id: "1",
    title: "Finish React Project",
    description: "Complete all required tasks in the current React project, including bug fixes and UI improvements.",
    completed: false,
  },
  {
    id: "2",
    title: "Buy Groceries",
    description: "Milk, bread, eggs, vegetables, and fruits.",
    completed: true,
  },
  {
    id: "3",
    title: "Workout at the Gym",
    description: "Full body strength training, including warmup and stretching.",
    completed: false,
  },
];

function TasksPage() {
  // רשימת המשימות
  const [tasks] = useState<TaskItem[]>(MOCK_TASKS);

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        רשימת המשימות שלי
      </Typography>
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