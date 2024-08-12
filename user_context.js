// user_context.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [redirectPath, setRedirectPath] = useState('/');

  return (
    <UserContext.Provider value={{ username, setUsername, redirectPath, setRedirectPath }}>
      {children}
    </UserContext.Provider>
  );
};
