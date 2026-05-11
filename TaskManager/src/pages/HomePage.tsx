import { Box, Typography, Button, Container, Paper, Stack, Grid } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';

const HomePage = () => {
  return (
    <Box>
      {/* --- Hero Section --- */}
      <Box 
        sx={{ 
          backgroundColor: '#f0f4f8', 
          py: { xs: 8, md: 12 }, 
          borderBottom: '1px solid #e0e0e0',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800, color: '#1a2027' }}>
            Turning Ideas into Digital Reality
          </Typography>
          <Typography variant="h5" color="text.secondary" component={'p'} sx={{ mb: 4 }}>
            Developing modern, fast, and beautifully designed applications with the market's most advanced technologies.
          </Typography>
          <Stack direction="row" spacing={2} sx={{justifyContent: "center"}}>
            <Button variant="contained" size="large" sx={{ px: 4, py: 1.5, borderRadius: 2 }}>
              Get Started
            </Button>
            <Button variant="outlined" size="large" sx={{ px: 4, py: 1.5, borderRadius: 2 }}>
              Learn More
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* --- Features Section --- */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={4}>
          {/* Feature 1 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper elevation={0} sx={{ p: 4, textAlign: 'center', height: '100%', border: '1px solid #f0f0f0', borderRadius: 4 }}>
              <RocketLaunchIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>Top Performance</Typography>
              <Typography variant="body2" color="text.secondary">
                Optimized performance using React and Vite for near-instant page loads.
              </Typography>
            </Paper>
          </Grid>

          {/* Feature 2 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper elevation={0} sx={{ p: 4, textAlign: 'center', height: '100%', border: '1px solid #f0f0f0', borderRadius: 4 }}>
              <CodeIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>Clean Code</Typography>
              <Typography variant="body2" color="text.secondary">
                Written in TypeScript to ensure stable, readable, and maintainable code over time.
              </Typography>
            </Paper>
          </Grid>

          {/* Feature 3 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper elevation={0} sx={{ p: 4, textAlign: 'center', height: '100%', border: '1px solid #f0f0f0', borderRadius: 4 }}>
              <DevicesIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>Fully Responsive</Typography>
              <Typography variant="body2" color="text.secondary">
                Perfectly adapted to any screen - from mobile devices to wide desktop monitors.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;