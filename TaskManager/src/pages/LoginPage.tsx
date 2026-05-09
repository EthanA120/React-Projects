import { Container, Box } from '@mui/material';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Login />
      </Box>
    </Container>
  );
};

export default LoginPage;