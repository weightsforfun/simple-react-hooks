import { useState, useEffect } from "react";
export const useNetwork = (onHandle) => {
  const [status, setStatus] = useState(window.navigator.onLine);
  const handleChange = () => {
    if (typeof onHandle === "function") {
      onHandle(window.navigator.onLine);
    }
    setStatus(window.navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};
