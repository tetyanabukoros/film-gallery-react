import React, { useContext, useState } from 'react';
import { 
  Dialog,
  Button,
  DialogActions,
  TextField,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import { AppContext } from '../AppContext';

export const SignUpModal = ({ openSignUp, handleClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUpNewUser, users, authUser, setAuthUser} = useContext(AppContext);

  console.log(users, authUser)


  const handleSignUp = () => {
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
  }

   return (
    <Dialog 
      open={openSignUp} 
      onClose={handleClose} 
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Sign up</DialogTitle>
      <DialogContent>
        <DialogContentText>Join us! Sign up!</DialogContentText>
          <TextField 
          type="text"
          placeholder='Enter name'
          value={name}
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          fullWidth
          onChange={((e) => setName(e.target.value))}
        />
        <TextField 
          autoFocus
          value={email}
          margin="dense"
          id="email"
          label="Email Adress"
          type="email"
          fullWidth
          onChange={((e) => setEmail(e.target.value))}

        />
        <TextField 
          autoFocus
          value={password}
          margin="dense"
          id="pass"
          label="Password"
          type="password"
          fullWidth
          onChange={((e) => setPassword(e.target.value))}
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
    </Dialog>
  )
}
