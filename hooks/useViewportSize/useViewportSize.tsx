import { useEffect, useState } from "react";

const useViewportSize = (targetWidth: number) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth > targetWidth) {
      setIsMobile(false);
    } else if (window.innerWidth <= targetWidth) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > targetWidth) {
        setIsMobile(false);
      } else if (window.innerWidth <= targetWidth) {
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useViewportSize;
