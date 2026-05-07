import { Typography, Box, Paper, Divider } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ maxWidth: '800px', mx: 'auto', mt: 4 }}>
      <Paper elevation={0} sx={{ p: 4, backgroundColor: 'transparent' }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          About Me
        </Typography>
        <Typography variant="h6" component="p" color="text.secondary">
          I am a Full Stack Developer with a passion for creating user-friendly interfaces.
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          This website was built as a learning project showcasing the use of React, TypeScript, and Material UI. 
          Here I integrate work with external APIs along with advanced state management
          and performance optimizations.
        </Typography>
      </Paper>
    </Box>
  );
};

export default About;