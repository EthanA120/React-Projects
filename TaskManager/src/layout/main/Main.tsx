import { Container, Box} from '@mui/material';
import Router from '../../router/Router';

const Main = () => {
  return (
    <Box component="main" sx={{ minHeight: '70vh', py: 8, backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="lg">
        <Router />
      </Container>
    </Box>
  );
};

export default Main;