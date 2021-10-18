import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [authorised, updateAuthority] = useState(false);

  const didLogin = () => updateAuthority(true);

  return <AuthContext.Provider value={{ authorised, didLogin }}>{props.children}</AuthContext.Provider>;
};

export default AuthContextProvider;
