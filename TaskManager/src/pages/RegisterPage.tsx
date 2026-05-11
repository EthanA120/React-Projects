import { Container, Box } from '@mui/material';
import Register from '../components/Register';

const RegisterPage = () => {
  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Register />
      </Box>
    </Container>
  );
};

export default RegisterPage;