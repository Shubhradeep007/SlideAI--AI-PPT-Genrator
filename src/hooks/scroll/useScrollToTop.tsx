import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = (): void => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll smoothly to top when route changes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
};

export default useScrollToTop;
