import React, { createContext, useContext, useState } from "react";
import Login from "../component/Login";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [loginOpen, setLoginOpen] = useState(false);

  const openLogin = () => {
    setLoginOpen(true);
  };

  const closeLogin = () => {
    setLoginOpen(false);
  };

  return (
    <LoginContext.Provider value={{ openLogin, closeLogin }}>
      {children}

      {loginOpen && <Login onClose={closeLogin} />}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  return useContext(LoginContext);
};