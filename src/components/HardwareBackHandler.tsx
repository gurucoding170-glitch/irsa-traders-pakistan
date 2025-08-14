import { useEffect, useRef } from "react";
import { App as CapacitorApp } from "@capacitor/app";
import { Capacitor } from "@capacitor/core";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const HardwareBackHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const lastBackRef = useRef(0);

  useEffect(() => {
    // Only run on native platforms
    if (!Capacitor.isNativePlatform()) {
      return;
    }

    let handler: any;
    
    CapacitorApp.addListener("backButton", ({ canGoBack }) => {
      const now = Date.now();

      // If not on home, go back or to home
      if (location.pathname !== "/") {
        if (window.history.state && window.history.state.idx > 0) {
          navigate(-1);
        } else {
          navigate("/");
        }
        return;
      }

      // On home: require double press to exit
      if (now - lastBackRef.current < 1500) {
        CapacitorApp.exitApp();
      } else {
        lastBackRef.current = now;
        toast("Press back again to exit");
      }
    }).then((h) => {
      handler = h;
    }).catch((error) => {
      console.log('App plugin not available:', error);
    });

    return () => {
      if (handler) {
        handler.remove();
      }
    };
  }, [location.pathname, navigate]);

  return null;
};
