// RedirectHandler.jsx

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getRedirectResult } from "firebase/auth";
import { auth } from "../firebase";

const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleRedirect = async () => {
      try {
        await getRedirectResult(auth);
        navigate("/bot"); // Navigate to your desired page after successful sign-in
      } catch (error) {
        console.error("Error handling redirect:", error);
      }
    };

    handleRedirect();
  }, [navigate]);

  return null;
};

export default RedirectHandler;
