import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

import { 
  AppBar, 
  Container, 
  Toolbar,
  Typography,
  Box,
  Button,
  DialogActions,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@mui/material';

import SwiperCore, {
  Navigation
} from 'swiper/core';

SwiperCore.use([Navigation]);


export const Header = ({ handleOpenSignIn, openSignIn, handleClose}) => {
  return (
    <AppBar 
    position="fixed" 
    color="primary"
  >
    <Container fixed >
      <Toolbar>
        <Typography marginRight={100}>UserName</Typography>
        <Box marginRight={3}>
          <Button 
            color="inherit" 
            variant="outlined"
            onClick={handleOpenSignIn}
          >
            Sign in
          </Button>
          <Dialog open={openSignIn} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Sign in</DialogTitle>
            <DialogContent>
            <DialogContentText>Sign in to see more </DialogContentText>
              <TextField 
              autoFocus
              margin="dense"
              id="name"
              label="Email Adress"
              type="email"
              fullWidth
              />
              <TextField 
              autoFocus
              margin="dense"
              id="pass"
              label="Password"
              type="password"
              fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="error">Cancel</Button>
              <Button onClick={handleClose} variant="contained" color="primary">Log in</Button>
            </DialogActions>

          </Dialog>
        </Box>
        <Button  style={{backgroundColor: '#DC143C'}} variant="contained">Sign up</Button>

      </Toolbar>
    </Container>
  </AppBar>
  )
}