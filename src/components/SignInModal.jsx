import React, { useContext, useState } from 'react';

import { 
  Button,
  DialogActions,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Alert
} from '@mui/material';
import { AppContext } from '../AppContext';

export const SignInModal = ({ openSignIn, handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const { users, setAuthUser } = useContext(AppContext);

  const handleSignIn = () => {
    const findedUser = users.find(el => el.email === email && el.password === password)
    if (findedUser) {
      setAuthUser(findedUser)
    } setError(true);
  }

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
          autoFocus
          margin="dense"
          id="name"
          label="Email Adress"
          type="email"
          fullWidth
          value={email}
          onChange={((e) => setEmail(e.target.value))}
        />
          <TextField 
          margin="dense"
          id="pass"
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={((e) => setPassword(e.target.value))}
        />
        {error && <Alert severity="error">User with this email and password does not exist!</Alert>}

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
