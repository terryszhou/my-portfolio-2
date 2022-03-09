import * as React from "react";

export const useOnScreen = () => {
  const visRef = React.useRef();
  const [visible, setVisible] = React.useState<boolean>(false);

  const callbackFunction = (entries: [IntersectionObserverEntry]): void => {
    const [entry] = entries;
    setVisible(entry.isIntersecting);
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, {
      root: null,
      rootMargin: "0px",
      threshold: 0.25
    });
    const vis = visRef.current;
    if (vis) observer.observe(vis);
    return () => {
      if (vis) observer.unobserve(vis);
    };
  }, [visRef])

  return [visRef, visible]
};
