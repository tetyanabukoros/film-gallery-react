import React, { useContext } from 'react';
import { Typography, Button } from '@mui/material';
import { SignInModal } from './SignInModal';
import { AppContext } from '../AppContext';

export const Footer = ({ openSignIn, handleClose, handleOpenSignIn }) => {
const { authUser } = useContext(AppContext);

  return (
    <footer>
      <Typography marginTop={3} align="center">
        {!authUser && (
          <Button  
            onClick={handleOpenSignIn}
            style={{backgroundColor: "#ffeb3b", color: "#000"}} 
            variant="contained">Sign in for more access
          </Button>
        )}
        <SignInModal
          openSignIn={openSignIn} 
          handleClose={handleClose} 
        />
      </Typography>
      <Typography marginTop={3} variant="subtitle1" component="p" align="center" color="textSecondary">
        Enjoy your online cinema
      </Typography>
      <Typography variant="subtitle1" component="p" align="center" color="textSecondary">
        2022 
      </Typography>
    </footer>
  )
}