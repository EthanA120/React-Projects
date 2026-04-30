import { useEffect, useState } from 'react';
import { 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  CircularProgress, 
  Box 
} from '@mui/material';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostsPages = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Error loading posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unecspected error has been occured');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error" align="center">{error}</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        הפוסטים שלי
      </Typography>
      
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} key={post.id}>
            <Card variant="outlined" sx={{ '&:hover': { boxShadow: 3 } }}>
              <CardContent>
                <Typography variant="h6" component="h2" color="primary" gutterBottom>
                  {post.id}. {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PostsPages;