import * as React from "react";

interface useElementProps {
  root: null,
  rootMargin: string,
  threshold: number,
};

export const useElementOnScreen = (options: useElementProps) => {
  const containerRef = React.useRef<any>(null);
  const [ isVisible, setIsVisible ] = React.useState<boolean>(false);

  const callbackFunction = (entries: [ IntersectionObserverEntry ]): void => {
    const [ entry ] = entries
    setIsVisible(entry.isIntersecting);
  };

  React.useEffect(() => {
    const container = containerRef.current
    const observer = new IntersectionObserver(callbackFunction, options)
    if (container) {
      observer.observe(container)
    };
    return () => {
      if (container) {
        observer.unobserve(container)
      };
    };
  }, [containerRef, options])
  
  return [containerRef, isVisible]
};
