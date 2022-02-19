import * as React from "react";
import "./App.css";
import "./Hex.css";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Social } from "./components/Social";
import { VStack, useMediaQuery } from "@chakra-ui/react";

export const App = () => {
  const [isLargeScreen] = useMediaQuery("(min-width: 840px)");
  const pageRefs = React.useRef({});
  const [isVisible, setVisible] = React.useState<boolean>(false);
  const domRefs = React.useRef({});
  const [y, setY] = React.useState<number>(window.scrollY);
  const [scrollDir, setScrollDir] = React.useState<string>("");

  // React.useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => setVisible(entry.isIntersecting));
  //   });
  //   observer.observe(domRefs.current);
  // }, []);

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

  return (
    <VStack spacing={0}>
      <Nav
        isLargeScreen={isLargeScreen}
        pageRefs={pageRefs}
        scrollDir={scrollDir}
        y={y} />
      <Social
        isLargeScreen={isLargeScreen}
        scrollDir={scrollDir}
        y={y} />
      <Home pageRefs={pageRefs} />
      <About pageRefs={pageRefs} domRefs={domRefs} isVisible={isVisible} />
      <Experience pageRefs={pageRefs} domRefs={domRefs} isVisible={isVisible} />
      <Projects pageRefs={pageRefs} domRefs={domRefs} isVisible={isVisible} />
      <Contact pageRefs={pageRefs} domRefs={domRefs} isVisible={isVisible} />
    </VStack>
  );
};
