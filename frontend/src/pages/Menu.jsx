import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Grid, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const { restaurantId } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [menuResponse, restaurantResponse] = await Promise.all([
          axios.get(`http://localhost:5000/api/menu/${restaurantId}`),
          axios.get(`http://localhost:5000/api/restaurants/${restaurantId}`)
        ]);
        setMenuItems(menuResponse.data);
        setRestaurant(restaurantResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [restaurantId]);

  return (
    <div>
      {restaurant && (
        <Typography variant="h4" gutterBottom>
          {restaurant.name} Menu
        </Typography>
      )}
      <Grid container spacing={2}>
        {menuItems.map(item => (
          <Grid item key={item._id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={item.image || '/default-food.jpg'}
                alt={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="h6" sx={{ mt: 1 }}>
                  ${item.price.toFixed(2)}
                </Typography>
                <Button 
                  size="small" 
                  onClick={() => addToCart(item)}
                  sx={{ mt: 1 }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Menu;