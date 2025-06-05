import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const RestaurantCard = ({ restaurant }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={restaurant.image}
        alt={restaurant.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {restaurant.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {restaurant.cuisine} • {restaurant.deliveryTime} mins
        </Typography>
        <Button size="small" href={`/menu/${restaurant.id}`}>View Menu</Button>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;