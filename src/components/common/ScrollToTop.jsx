import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ye line page ko top par bhej degi
    window.scrollTo(0, 0);
  }, [pathname]); // Jab bhi pathname badlega, ye chalega

  return null;
};

export default ScrollToTop;