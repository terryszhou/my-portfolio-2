
import { VStack, useMediaQuery } from "@chakra-ui/react";
import * as React from "react";

import "./App.css";
import "./Hex.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Social } from "./components/Social";
import { useElementOnScreen } from "./hooks/useElementOnScreen";
import { useNavigation } from "./hooks/useNavigation";

export const App = () => {
  const [isLargeScreen] = useMediaQuery("(min-width: 840px)");
  const pageRefs = React.useRef({});
  const domRefs = React.useRef({});
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  });
  const [y, scrollDir] = useNavigation();

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
      <Home pageRefs={pageRefs} isVisible={isVisible} containerRef={containerRef} />
      <About pageRefs={pageRefs} domRefs={domRefs} isVisible={isVisible} />
      <Experience pageRefs={pageRefs} domRefs={domRefs} isVisible={isVisible} />
      <Projects pageRefs={pageRefs} domRefs={domRefs} isVisible={isVisible} />
      <Contact pageRefs={pageRefs} domRefs={domRefs} isVisible={isVisible} />
    </VStack>
  );
};
