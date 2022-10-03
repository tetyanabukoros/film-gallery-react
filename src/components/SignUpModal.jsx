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

export const SignUpModal = ({ openSignUp, handleClose, setShowHome }) => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");

  const handleSignUp = () => {
    if (name.current.value 
        && email.current.value 
        && password.current.value) {
        localStorage.setItem("name", name.current.value);
        localStorage.setItem("email", email.current.value);
        localStorage.setItem("password", password.current.value);
        localStorage.setItem("signUp", email.current.value);
        console.log(name.current.value, email.current.value, password.current.value)
        window.location.reload();
    }
  }

  useEffect(() => {
    if (localSignUp) {
      setShowHome(true)
    };

  }, [localSignUp, localEmail, setShowHome])


  return (
    <Dialog 
      open={openSignUp} 
      onClose={handleClose} 
      aria-labelledby="form-dialog-title"
    >
    <DialogTitle id="form-dialog-title">Sign un</DialogTitle>
    <DialogContent>
      <DialogContentText>Join us! Sign up!</DialogContentText>
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
              onClick={handleSignUp} 
              variant="contained" 
              color="primary"
            >
              Sign up
            </Button>
            <Button onClick={handleClose} color="error">Cancel</Button>
          </DialogActions>
          {/* <div>
              <div>
                <input placeholder="name" type="text" ref={name} />
              </div>
              <div>
                <input placeholder="email" type="text" ref={email} />
              </div>
              <div>
                <input placeholder="password" type="password" ref={password} />
              </div>
              <button onClick={handleSignUp}>
                Sign up
              </button>
          </div> */}
    </Dialog>
  )
}
