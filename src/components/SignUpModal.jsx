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

  const { signUpNewUser, setAuthUser, setResumeSignUp, setWellcomeScreen} = useContext(AppContext);

  const handleSignUp = () => {
    if (!name) {
      setError(true);
    }

    if (!email) {
      setError(true);
    } else {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        setEmailError(true);
      }}

    if (!password) {
      setError(true);
    } else {
      if (!/^.*(?=.{6,20})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&!-_]).*$/i.test(password)) {
      setPasswordError(true);
    }};

    if (!error && !emailError && !passwordError) {
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

   return (
    <Dialog 
      open={openSignUp} 
      onClose={handleClose} 
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Sign up</DialogTitle>
      {error && <Alert severity="error">Please fill in all fields</Alert>}
      {emailError && <Alert severity="error">Invalid email</Alert>}
      {passwordError && <Alert severity="error">Password must contain minimum 6 characters: 1 capital letter, 1 special character and 1 number</Alert>}
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
            setName(e.target.value);
            setError(false);
            setEmailError(false);
            setPasswordError(false);
          })}
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
            setEmail(e.target.value);
            setError(false);
            setEmailError(false);
            setPasswordError(false);
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
            setPassword(e.target.value);
            setError(false);
            setEmailError(false);
            setPasswordError(false);
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
