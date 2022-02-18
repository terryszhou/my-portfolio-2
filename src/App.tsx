import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { VStack } from "@chakra-ui/react";

export const App = () => {
  const pageRefs = useRef({});
  const [isVisible, setVisible] = useState<boolean>(false);
  const domRefs = useRef({});

  // useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => setVisible(entry.isIntersecting));
  //   });
  //   observer.observe(domRefs.current);
  // }, []);

  return (
    <VStack spacing={0}>
      <Nav pageRefs={pageRefs} domRefs={domRefs} isVisible={isVisible} />
      <Home pageRefs={pageRefs} domRefs={domRefs} isVisible={isVisible} />
      <About pageRefs={pageRefs} domRefs={domRefs} isVisible={isVisible} />
      <Experience pageRefs={pageRefs} domRefs={domRefs} isVisible={isVisible} />
      <Projects pageRefs={pageRefs} domRefs={domRefs} isVisible={isVisible} />
      <Contact pageRefs={pageRefs} domRefs={domRefs} isVisible={isVisible} />
    </VStack>
  );
};
