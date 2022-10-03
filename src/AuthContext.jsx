import React, { useState } from 'react';
import { AuthForm } from './AuthForm';

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  if (!user) {
    return <AuthForm onLogin={setUser} />;
  }

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
};
