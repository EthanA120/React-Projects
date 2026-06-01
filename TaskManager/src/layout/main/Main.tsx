import { Container, Box } from '@mui/material';
import Router from '../../router/Router';

const Main = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, py: 8, bgcolor: 'background.default', color: 'text.primary', minHeight: '80vh' }}>
      <Container maxWidth="lg">
        <Router />
      </Container>
    </Box>
  );
};

export default Main;