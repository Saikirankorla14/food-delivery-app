import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Food Delivery
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
        Order food from your favorite restaurants
      </Typography>
      <Button 
        variant="contained" 
        size="large" 
        component={Link} 
        to="/restaurants"
      >
        Browse Restaurants
      </Button>
    </Container>
  );
};

export default Home;