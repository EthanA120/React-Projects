import { Card, CardContent, Typography, Checkbox } from '@mui/material';

// Definition of the data the component receives (Props)
interface TaskProps {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  onToggleComplete: (id: string) => void; // Function triggered when clicking the checkbox
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