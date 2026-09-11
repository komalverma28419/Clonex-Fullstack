import React, { createContext, useContext, useState } from "react";
import Toast from "../component/ui/Toast";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
  });

  const showToast = (type, message) => {
    setToast({
      show: true,
      type,
      message,
    });
  };

  const hideToast = () => {
    setToast({
      show: false,
      type: "",
      message: "",
    });
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}

      <Toast toast={toast} onClose={hideToast} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};