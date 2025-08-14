import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const HardwareBackHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Handle browser back button for web
    const handlePopState = () => {
      // This will be handled by React Router automatically
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [location.pathname, navigate]);

  return null;
};
