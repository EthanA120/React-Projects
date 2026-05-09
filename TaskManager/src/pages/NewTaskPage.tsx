import { Container, Typography, TextField, Button, Box, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ROUTS from '../router/Routs';

interface NewTaskFormData {
  title: string;
  description: string;
}

const NewTaskPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<NewTaskFormData>();
  const navigate = useNavigate();

  const onSubmit = (data: NewTaskFormData) => {
    // This is where you would call an API or update state in a real app
    console.log('Creating New Task:', data);
    
    // Redirect user back to the tasks list after submission
    navigate(ROUTS.TASKS);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600 }}>
          Create New Task
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Task Title"
            margin="normal"
            required
            {...register('title', { required: 'Title is required' })}
            error={!!errors.title}
            helperText={errors.title?.message}
          />
          
          <TextField
            fullWidth
            label="Description"
            margin="normal"
            required
            multiline
            rows={4}
            {...register('description', { required: 'Description is required' })}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
          
          <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => navigate(ROUTS.TASKS)}
            >
              Cancel
            </Button>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
            >
              Save Task
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default NewTaskPage;
