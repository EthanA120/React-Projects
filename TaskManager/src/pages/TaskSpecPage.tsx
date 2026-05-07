import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import Task from "../components/Task";
import { MOCK_TASKS, type TaskItem } from "./TasksPage";

function TaskSpecPage() {
  // שליפת ה-ID מתוך כתובת ה-URL (למשל מהנתיב /tasks/1)
  const [task, setTask] = useState<TaskItem | undefined>();
  const { id } = useParams<{ id: string }>();

  // מציאת המשימה הספציפית מתוך הרשימה שלנו לפי ה-ID
  setTask(MOCK_TASKS.find((t) => t.id === id));

  // אם המשימה לא נמצאה (למשל אם ה-ID שגוי ב-URL)
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
      {/* שימוש בקומפוננטה Task כדי להציג את כל המידע (כותרת, תיאור וצ'קבוקס) */}
      <Task 
        id={task.id}
        title={task.title}
        description={task.description}
        completed={task.completed}
        onToggleComplete={() => {}} // כרגע פונקציה ריקה כי זה דף תצוגה
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