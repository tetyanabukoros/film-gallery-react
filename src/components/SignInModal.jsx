import React, { useEffect, useRef } from 'react';

import { 
  Button,
  DialogActions,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@mui/material';

export const getEmail = localStorage.getItem("emailData")
export const getPassword = localStorage.getItem("passwordData")

export const SignInModal = ({ openSignIn, handleClose, setShowHome }) => {

  const email = useRef();
  const password = useRef();
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");

  const handleSignIn = () => {
    if ((email.current.value === localEmail) 
          && (password.current.value === localPassword)) {
      localStorage.setItem("signUp", email.current.value)
      window.location.reload();
    } else {
      alert('Please input correct data')
    }
  }

  useEffect(() => {
    if (localEmail) {
      setShowHome(true);
    }
  }, [localEmail, setShowHome])

  return (
    <Dialog 
      open={openSignIn} 
      onClose={handleClose} 
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Sign in</DialogTitle>
      <DialogContent>
        <DialogContentText>Sign in to see more </DialogContentText>
          <TextField 
          ref={email}
          autoFocus
          margin="dense"
          id="name"
          label="Email Adress"
          type="email"
          fullWidth
        />
          <TextField 
          ref={password}
          autoFocus
          margin="dense"
          id="pass"
          label="Password"
          type="password"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button 
          onClick={handleSignIn} 
          variant="contained" 
          color="primary"
        >
          Log in
        </Button>
        <Button onClick={handleClose} color="error">Cancel</Button>
      </DialogActions>
  </Dialog>
  )
}
