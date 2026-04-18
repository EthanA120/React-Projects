import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Box,
  Divider,
} from "@mui/material";


interface TaskItemProps {
  title: string;
  description: string;
  status?: string;
  dueDate: string;
}


const TaskItem = ({ title, description, status, dueDate }: TaskItemProps) => {
  // פונקציה לבחירת צבע הסטטוס בצורה דינמית
  const getStatusColor = (status: string | undefined) => {
    switch (status?.toLowerCase()) {
      case "completed":
      case "בוצע":
        return "success";
      case "in progress":
      case "בביצוע":
        return "warning";
      default:
        return "info";
    }
  };

  
  return (
    <Card sx={{ maxWidth: 400, borderRadius: 3, boxShadow: 3, m: 2 }}>
      <CardContent>
        {/* כותרת וסטטוס */}
        <Stack
          direction="row"
          sx={{ justifyContent: "flex-end", alignItems: "center" }}
        >
          <Stack direction="row">
            <Typography variant="h6">{title}</Typography>
          </Stack>
          <Chip
            label={status}
            color={getStatusColor(status)}
            size="small"
            variant="outlined"
          />
        </Stack>
        <Divider sx={{ mb: 2 }} />
        {/* תיאור המשימה */}
        <Typography variant="body2">{description}</Typography>
        {/* תאריך יעד */}
        <Box>
          <Typography variant="caption">תאריך לביצוע: {dueDate}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskItem;