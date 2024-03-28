// AuthProvider.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Perform login logic and set user data
    setUser(userData);
    // Store user data in local storage or cookies
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    // Perform logout logic and clear user data
    setUser(null);
    // Clear user data from local storage or cookies
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
