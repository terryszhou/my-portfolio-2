import React, { useRef } from "react";
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

  return (
    <VStack spacing={0}>
      <Nav pageRefs={pageRefs} />
      <Home pageRefs={pageRefs} />
      <About pageRefs={pageRefs} />
      <Experience pageRefs={pageRefs} />
      <Projects pageRefs={pageRefs} />
      <Contact pageRefs={pageRefs} />
    </VStack>
  );
};
