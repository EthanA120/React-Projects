import { Typography, Box, Paper, Divider } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ maxWidth: '800px', mx: 'auto', mt: 4 }}>
      <Paper elevation={0} sx={{ p: 4, backgroundColor: 'transparent' }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          קצת עליי
        </Typography>
        <Typography variant="h6" component="p" color="text.secondary">
          אני מפתח Full Stack עם תשוקה ליצירת ממשקים ידידותיים למשתמש.
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          האתר הזה נבנה כפרויקט למידה המציג שימוש ב-React, TypeScript ו-Material UI. 
          כאן אני משלב עבודה עם API חיצוניים (כמו בפוסטים שראינו) יחד עם ניהול State מתקדם
          ואופטימיזציות של ביצועים.
        </Typography>
      </Paper>
    </Box>
  );
};

export default About;