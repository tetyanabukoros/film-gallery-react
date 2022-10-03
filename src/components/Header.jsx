import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { getEmail } from './SignInModal';
import { getPassword } from './SignInModal';

import { 
  AppBar, 
  Container, 
  Toolbar,
  Typography,
  Box,
  Button,
} from '@mui/material';

import SwiperCore, {
  Navigation
} from 'swiper/core';
import { SignInModal } from './SignInModal';
import { SignUpModal } from './SignUpModal';

SwiperCore.use([Navigation]);


export const Header = ({ handleOpenSignIn, openSignIn, handleClose, handleOpenSignUp, openSignUp}) => {
  const [showHome, setShowHome] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem('signUp');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.reload();
    setShowHome(false)
  }

  return (
    <AppBar 
    position="fixed" 
    color="primary"
  >
    <Container fixed >
      <Toolbar>
        <Typography marginRight={80}>Films gallery</Typography>
        {showHome && (
        <Typography marginRight={10}>
          Wellcome, {localStorage.getItem('name')}!
        </Typography>)}
        <Box>
          {
            (getEmail && getPassword) || showHome
            ? (
              <Button 
              color="inherit" 
              variant="outlined"
              onClick={handleLogOut}
            >
              Log out
            </Button>
            )
            : ( 
            <> 
            <Button 
              style={{marginRight: "10px"}}
              color="inherit" 
              variant="outlined"
              onClick={handleOpenSignIn}
            >
              Sign in
            </Button>
            <SignInModal 
              openSignIn={openSignIn} 
              handleClose={handleClose} 
              setShowHome={setShowHome}
            />
            <Button 
              onClick={handleOpenSignUp}
              style={{backgroundColor: '#DC143C', marginRight: "10px"}} 
              variant="contained"
            >
              Sign up
            </Button>
            <SignUpModal
              openSignUp={openSignUp} 
              handleClose={handleClose} 
              setShowHome={setShowHome}
            />
            </>
            )} 
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  )
}