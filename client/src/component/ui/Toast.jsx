import React, { useEffect } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";

const Toast = ({ toast, onClose }) => {
  
  useEffect(() => {
    if (!toast.show) return;

    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [toast.show, onClose])
  
  if (!toast.show) return null;
  const isSuccess = toast.type === "success";

  return (
    <div className="fixed top-20 right-5 z-50 w-80 overflow-hidden rounded-lg bg-white shadow-xl border border-gray-200">
      <div className="flex items-center justify-between gap-4 p-4">
        <div className="flex items-center gap-3">
          {isSuccess ? (
            <CheckCircle className="text-green-500" size={24} />
          ) : (
            <AlertCircle className="text-red-500" size={24} />
          )}

          <div>
            <p className="text-sm text-gray-600">{toast.message}</p>
          </div>
        </div>

        <button onClick={onClose}>
          <X size={18} />
        </button>
      </div>

      <div
        className={`h-1 ${
          isSuccess ? "bg-green-200" : "bg-red-200"
        }`}
      >
        <div
          className={`h-full w-full origin-right ${
            isSuccess ? "bg-green-500" : "bg-red-500"
          } animate-toast-progress`}
        />
      </div>
    </div>
  );
};

export default Toast;