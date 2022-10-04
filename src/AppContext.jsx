import React from 'react';
import { useLocalStorage } from './components/LocalStorage';

export const AppContext = React.createContext({
  authUser: null,
  users: [],
  setUsers: () => {},
  signUpNewUser: () => {},
  setAuthUser: () => {},
});

export const AppContextProvider = ({children}) => {
  const [users, setUsers] = useLocalStorage('users', []);
  const [authUser, setAuthUser] = useLocalStorage('authUser', null);

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
      }}
    >
    {children}
    </AppContext.Provider>
  )
};