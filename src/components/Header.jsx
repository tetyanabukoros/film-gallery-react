import React, { useContext } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

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
import { AppContext } from '../AppContext';

SwiperCore.use([Navigation]);


export const Header = ({ handleOpenSignIn, openSignIn, handleClose, handleOpenSignUp, openSignUp}) => {

  const {authUser, setAuthUser} = useContext(AppContext);
  console.log(authUser);

  const handleLogOut = () => {
    setAuthUser(null)
    window.location.reload();
  }
    
  return (
    <AppBar 
    position="fixed" 
    color="primary"
  >
    <Container fixed >
      <Toolbar>
        <Typography marginRight={80}>Films gallery</Typography>
        {authUser && (
        <Typography marginRight={10}>
          Wellcome, {authUser.name}!
        </Typography>)}
        <Box>
          { authUser
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
            />
            </>
            )} 
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  )
}