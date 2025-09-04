import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return null; // No renderiza nada
};
