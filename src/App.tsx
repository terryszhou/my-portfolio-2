
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
import { useOnScreen } from "./hooks/useOnScreen";
import { useNavigation } from "./hooks/useNavigation";

export const App = () => {
  const [isLargeScreen]: boolean[] = useMediaQuery("(min-width: 840px)");
  const pageRefs: React.MutableRefObject<{}> = React.useRef({});
  const [visRef, visible]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();
  const [visRef2, visible2]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();
  const [y, scrollDir]: [number, string] = useNavigation();

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
      <Home
        visRef={visRef}
        pageRefs={pageRefs}
        visible={visible} />
      <About
        visRef={visRef2}
        pageRefs={pageRefs}
        visible={visible2} />
      <Experience pageRefs={pageRefs} />
      <Projects pageRefs={pageRefs} />
      <Contact pageRefs={pageRefs} />
    </VStack>
  );
};
