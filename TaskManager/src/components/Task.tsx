import { Card, CardContent, Typography, Checkbox } from '@mui/material';

// הגדרת המידע שהרכיב מקבל (Props)
interface TaskProps {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  onToggleComplete: (id: string) => void; // פונקציה שמופעלת כשלוחצים על הצ'קבוקס
}

const Task = ({ id, title, description, completed, onToggleComplete }: TaskProps) => {
  return (
    <Card sx={{ mb: 2, display: 'flex', alignItems: 'center', p: 1 }}>
      <Checkbox
        checked={completed}
        onChange={() => onToggleComplete(id)}
        color="primary"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ textDecoration: completed ? 'line-through' : 'none' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Task;