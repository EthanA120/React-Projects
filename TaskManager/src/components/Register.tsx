import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';

// Define the validation schema using Joi
const schema = Joi.object({
  fullName: Joi.string().min(2).required().messages({
    'string.empty': 'Full name is required',
    'string.min': 'Name must be at least 2 characters',
  }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.empty': 'Email is required',
    'string.email': 'Please enter a valid email address',
  }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'Password is required',
    'string.min': 'Password must be at least 6 characters',
  }),
  confirmPassword: Joi.any().equal(Joi.ref('password')).required().messages({
    'any.only': 'Passwords do not match',
    'any.required': 'Please confirm your password'
  }),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: any) => {
    // For now, just logging the data to the console
    console.log('New User Registration Data:', data);
    alert('Registration successful! (Logged to console)');
  };

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 2, width: '100%' }}>
      <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 600 }}>
        Register
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Full Name"
          margin="normal"
          error={!!errors.fullName}
          helperText={errors.fullName?.message as string}
          {...register('fullName')}
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          margin="normal"
          error={!!errors.email}
          helperText={errors.email?.message as string}
          {...register('email')}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          error={!!errors.password}
          helperText={errors.password?.message as string}
          {...register('password')}
        />
        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          margin="normal"
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message as string}
          {...register('confirmPassword')}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          size="large"
          sx={{ mt: 3, py: 1.5, borderRadius: 2 }}
        >
          Create Account
        </Button>
      </Box>
    </Paper>
  );
};

export default Register;