import * as React from "react";

export const useNavigation = (): [number, string] => {
  const [y, setY] = React.useState<number>(window.scrollY);
  const [scrollDir, setScrollDir] = React.useState<string>("");

  const handleNavigation = React.useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setScrollDir("up");
      } else if (y < window.scrollY) {
        setScrollDir("down");
      };
      setY(window.scrollY);
    }, [y]
  );
  
  React.useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return [y, scrollDir];
};