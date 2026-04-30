import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ backgroundColor: '#fff' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#1976d2' }}>
          MyApp
        </Typography>
        <Box>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/about">About</Button>
          <Button color="inherit" href="/contact">Contact Me</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;