import React from 'react';
import { useLocalStorage } from './components/LocalStorage';

export const AppContext = React.createContext({
  authUser: null,
  users: [],
  setUsers: () => {},
  signUpNewUser: () => {},
  setAuthUser: () => {},
  resumeSignUp: false,
  setResumeSignUp: () => {},
});

export const AppContextProvider = ({children}) => {
  const [users, setUsers] = useLocalStorage('users', []);
  const [authUser, setAuthUser] = useLocalStorage('authUser', null);
  const [resumeSignUp, setResumeSignUp] = useLocalStorage('resumeSignUp', false)

  const signUpNewUser = (newUser) => {
    return setUsers(prev => {
      return [
        ...prev,
        newUser,
      ];
    });
  };

  return (
    <AppContext.Provider
      value={{
        authUser,
        users,
        setUsers,
        signUpNewUser,
        setAuthUser,
        resumeSignUp,
        setResumeSignUp
      }}
    >
    {children}
    </AppContext.Provider>
  )
};