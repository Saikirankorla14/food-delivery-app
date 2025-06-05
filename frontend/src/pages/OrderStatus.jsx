import React from 'react';
import { Typography, Container } from '@mui/material';

const OrderStatus = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Order Status
      </Typography>
      <Typography variant="body1">
        Your order has been placed successfully!
      </Typography>
    </Container>
  );
};

export default OrderStatus;