import { useState } from 'react';
import { 
  Dialog,
} from '@mui/material';

export const NewUserSignUp = ({ addNewUserData, openSignUp, handleClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email can not be empty');
  const [passwordError, setPasswordError] = useState('Password can not be empty');

  const emaiHandler = (e) => {
    setEmail(e.target.value)
    // const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (!re.test(String(e.taret.value).toLowerCase())) {
    //   setEmailError('Not valid email')
    // } else {
    //   setEmailError('')
    // }
    setEmailError('')
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setPasswordError('Password can not be empty')
    }
    setPasswordError('')
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
        default:
        return;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const createdUser = {
      name, 
      email, 
      password,
    };

    addNewUserData(createdUser);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Dialog 
      open={openSignUp} 
      onClose={handleClose} 
      aria-labelledby="form-dialog-title"
    >
    <form onSubmit={handleSubmit}> 
      <h2>Registration</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        // required
      />
      {(emailDirty && emailError) && <div>{emailError}</div>}

      <input
        onBlur={(e) => blurHandler(e)}
        type="text"
        name="email"
        placeholder="Email"
        value={email}
        onChange={e => emaiHandler(e)}
        // required
      />
       {(passwordDirty && passwordError) && <div>{passwordError}</div>}

      <input
        onBlur={(e) => blurHandler(e)}
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => passwordHandler(e)}
        // required
      />
      <button 
        type="submit"
        data-cy="submit-button"
        disabled={
          name.trim() === ''
          || email.trim() === ''
          || password.trim() === ''
        }
      >
        Login
      </button>
      <button onClick={handleClose}>
        Close
      </button>

    </form>
    </Dialog>

  )
}