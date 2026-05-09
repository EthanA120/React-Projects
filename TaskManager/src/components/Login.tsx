import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';
import { type LoginFormData } from '../types/LoginFormData';


const Login = () => {
	const { register, handleSubmit } = useForm<LoginFormData>();

	const onSubmit = (data: LoginFormData) => {
		console.log('Login attempt:', data);
	};

	return (
		<Paper elevation={3} sx={{ p: 4, borderRadius: 2, width: '100%' }}>
			<Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 600 }}>
				התחברות
			</Typography>
			<Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
				<TextField
					fullWidth
					label="אימייל"
					type="email"
					margin="normal"
					required
					{...register('email')}
				/>
				<TextField
					fullWidth
					label="סיסמה"
					type="password"
					margin="normal"
					required
					{...register('password')}
				/>
				<Button
					fullWidth
					type="submit"
					variant="contained"
					size="large"
					sx={{ mt: 3, py: 1.5, borderRadius: 2 }}
				>
					התחבר
				</Button>
			</Box>
		</Paper>
	);
};

export default Login;