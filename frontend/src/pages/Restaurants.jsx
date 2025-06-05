import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestaurantCard from '../components/RestaurantCard';
import { Grid, Typography } from '@mui/material';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/restaurants');
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Restaurants Near You</Typography>
      <Grid container spacing={2}>
        {restaurants.map(restaurant => (
          <Grid item key={restaurant.id} xs={12} sm={6} md={4}>
            <RestaurantCard restaurant={restaurant} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Restaurants;