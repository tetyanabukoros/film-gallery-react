import React from 'react';
import { Typography, Button } from '@mui/material';

export const Footer = () => {
  return (

    <footer>
      <Typography marginTop={3} align="center" >
        <Button color="secondary" variant="contained">Sign in for more access</Button>
      </Typography>
      <Typography  marginTop={3} varianf="subtitle1" component="p" align="center"  color="textSecondary">
      2022 
      </Typography>

    </footer>
  )
}