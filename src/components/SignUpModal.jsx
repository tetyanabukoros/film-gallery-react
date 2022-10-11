import React, { useContext, useState } from 'react';
import { 
  Dialog,
  Button,
  DialogActions,
  TextField,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Alert,
} from '@mui/material';
import { AppContext } from './AppContext';

export const SignUpModal = ({ openSignUp, handleClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const { 
    signUpNewUser, 
    setAuthUser, 
    setResumeSignUp, 
    setWellcomeScreen
  } = useContext(AppContext);

  function validatePassword(pw) {
    return /[A-Z]/.test(pw) &&
           /[a-z]/.test(pw) &&
           /[0-9]/.test(pw) &&
           /[^A-Za-z0-9]/.test(pw) &&
           pw.length >= 6;
  }

  function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return (true)
  }
    return (false)
  }

  const handleSignUp = () => {
    if (!name || !email || !password) {
      setError(true)
    }

    if (email && (!validateEmail(email))) {
      setEmailError(true);
    }  else {
      if (password && (!validatePassword(password))) {
        setPasswordError(true);
      } else { 
        if (name && email && password) {
          signUpNewUser({
              name, 
              email, 
              password
            });
    
            setAuthUser({
              name, 
              email, 
              password
              });
            setWellcomeScreen(false);
        }
      }
    } 
  }

   return (
    <Dialog 
      open={openSignUp} 
      onClose={handleClose} 
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Sign up</DialogTitle>
      {error && <Alert severity="error">Please fill in all fields</Alert>}
      {emailError && <Alert severity="error">Invalid email</Alert>}
      {passwordError && <Alert severity="error">
        Password must contain minimum 6 characters: 1 capital letter, 1 special character and 1 number
      </Alert>}
      <DialogContent>
        <DialogContentText>Join us! Sign up!</DialogContentText>
          <TextField
          required 
          type="text"
          placeholder='Enter name'
          value={name}
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          fullWidth
          onChange={((e) => {
            setError(false)
            setName(e.target.value)
          }
            
          )}
        />

        <TextField 
          required
          value={email}
          margin="dense"
          id="email"
          label="Email Adress"
          type="email"
          fullWidth
          onChange={((e) => {
            setEmailError(false);
            setError(false);
            setEmail(e.target.value);
          })}
        />

        <TextField 
          required
          value={password}
          margin="dense"
          id="pass"
          label="Password"
          type="password"
          fullWidth
          onChange={((e) => {
            setPasswordError(false);
            setError(false);
            setPassword(e.target.value);
          })}
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
        <Button 
          onClick={() => {
            if (name !== '' || email !== '' || password !== '') {
              handleClose()
              setResumeSignUp(true);
            } else {
              handleClose()
            }
          }} 
          color="error"
        >
            Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}
