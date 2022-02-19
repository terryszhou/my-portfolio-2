import React, { useCallback, useEffect, useRef, useState } from "react";
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
  const pageRefs = useRef({});
  const [isVisible, setVisible] = useState<boolean>(false);
  const domRefs = useRef({});
  const [y, setY] = useState<number>(window.scrollY);
  const [scrollDir, setScrollDir] = useState<string>("");

  // useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => setVisible(entry.isIntersecting));
  //   });
  //   observer.observe(domRefs.current);
  // }, []);

  const handleNavigation = useCallback(
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
  
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <VStack spacing={0}>
      <Nav pageRefs={pageRefs} isLargeScreen={isLargeScreen} y={y} scrollDir={scrollDir} />
      <Social y={y} scrollDir={scrollDir} isLargeScreen={isLargeScreen} />
      <Home pageRefs={pageRefs} domRefs={domRefs} isVisible={isVisible} />
      <About pageRefs={pageRefs} domRefs={domRefs} isVisible={isVisible} />
      <Experience pageRefs={pageRefs} domRefs={domRefs} isVisible={isVisible} />
      <Projects pageRefs={pageRefs} domRefs={domRefs} isVisible={isVisible} />
      <Contact pageRefs={pageRefs} domRefs={domRefs} isVisible={isVisible} />
    </VStack>
  );
};
