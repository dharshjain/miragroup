import { useEffect, useState } from "react";

export function useHeaderVisible() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos <= 20) {
        setVisible(true);
      } else {
        const diff = currentScrollPos - prevScrollPos;
        if (diff > 10) {
          setVisible(false);
        } else if (diff < -10) {
          setVisible(true);
        }
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return visible;
}
