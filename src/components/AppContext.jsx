import React from 'react';
import { useLocalStorage } from './LocalStorage';

export const AppContext = React.createContext({
  authUser: null,
  users: [],
  setUsers: () => {},
  signUpNewUser: () => {},
  setAuthUser: () => {},
  resumeSignUp: false,
  setResumeSignUp: () => {},
  wellcomeScreen: true,
  setWellcomeScreen: () => {},
});

export const AppContextProvider = ({children}) => {
  const [users, setUsers] = useLocalStorage('users', []);
  const [authUser, setAuthUser] = useLocalStorage('authUser', null);
  const [resumeSignUp, setResumeSignUp] = useLocalStorage('resumeSignUp', false);
  const [wellcomeScreen, setWellcomeScreen] = useLocalStorage('wellcomeScreen', true);

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
        setResumeSignUp,
        wellcomeScreen,
        setWellcomeScreen,
      }}
    >
    {children}
    </AppContext.Provider>
  )
};