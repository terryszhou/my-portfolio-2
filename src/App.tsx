import { VStack } from "@chakra-ui/react";
import * as React from "react";

import "./App.css";
import "./Hex.css";

import { useOnScreen, useNavigation } from "./hooks";

import {
    About,
    Contact,
    Experience,
    Footer,
    Home,
    Nav,
    Projects,
    Social
} from "./components";

export const App = () => {
    const pageRefs: React.MutableRefObject<{}> = React.useRef({});
    const [visRef1, visible1]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();
    const [visRef2, visible2]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();
    const [visRef3, visible3]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();
    const [visRef4, visible4]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();
    const [visRef5, visible5]: (boolean | React.MutableRefObject<undefined>)[] = useOnScreen();
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
                visible={visible1} 
                visRef={visRef1} />
            <About
                pageRefs={pageRefs}
                visible={visible2} 
                visRef={visRef2} />
            <Experience
                pageRefs={pageRefs} 
                visible={visible3}
                visRef={visRef3} />
            <Projects
                pageRefs={pageRefs}
                visible={visible4}
                visRef={visRef4} />
            <Contact
                pageRefs={pageRefs}
                visible={visible5}
                visRef={visRef5} />
            <Footer />
        </VStack>
    );
};
