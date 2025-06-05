import React from 'react';
import { Typography, Container } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>Your Profile</Typography>
      <Typography variant="body1">Name: {user?.name}</Typography>
      <Typography variant="body1">Email: {user?.email}</Typography>
    </Container>
  );
};

export default Profile;