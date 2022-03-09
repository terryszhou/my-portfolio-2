
import { VStack } from "@chakra-ui/react";
import * as React from "react";

import "./App.css";
import "./Hex.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { NewProjects } from "./components/NewProjects";
import { OldProjects } from "./components/OldProjects";
import { Social } from "./components/Social";
import { useOnScreen } from "./hooks/useOnScreen";
import { useNavigation } from "./hooks/useNavigation";

export const App = () => {
  const pageRefs: React.MutableRefObject<{}> = React.useRef({});
  const [visRef, visible]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();
  const [visRef2, visible2]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();
  const [visRef3, visible3]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();
  const [visRef4, visible4]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();
  const [visRef5, visible5]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();
  const [visRef6, visible6]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();
  const [y, scrollDir]: [number, string] = useNavigation();

  return (
    <VStack spacing={0}>
      <Nav
        pageRefs={pageRefs}
        scrollDir={scrollDir}
        y={y} />
      <Social
        scrollDir={scrollDir}
        y={y} />
      <Home
        pageRefs={pageRefs}
        visible={visible} 
        visRef={visRef} />
      <About
        pageRefs={pageRefs}
        visible={visible2} 
        visRef={visRef2} />
      <Experience
        pageRefs={pageRefs} 
        visible={visible3}
        visRef={visRef3} />
      <NewProjects
        pageRefs={pageRefs}
        visible={visible4}
        visRef={visRef4} />
      <OldProjects
        pageRefs={pageRefs}
        visible={visible5}
        visRef={visRef5} />
      <Contact
        pageRefs={pageRefs}
        visible={visible6}
        visRef={visRef6} />
      <Footer />
    </VStack>
  );
};
