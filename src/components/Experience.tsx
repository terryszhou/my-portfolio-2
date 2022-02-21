import { Flex } from "@chakra-ui/react";
import React from "react";
import { PageProps } from "../helpers/interfaces";
import { SectionHeader } from "./SectionHeader";
import { HeroDividers } from "./HeroDividers";
import { Hexagon } from "./Hexagon";
import { fadeDown, rotate, flash } from "../helpers/animations";

export const Experience = ({ pageRefs, visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible])
  const testAnim: string = `${fadeDown} 3000ms, ${rotate} 3000ms`;
  const flashAnim: string = `${flash} 1000ms`

  return (
    <Flex
      transition={"1s ease-out"}
      opacity={visible ? 1 : 0.25}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={{ base: "column", lg: "row" }}
      height={"100vh"}
      position={"relative"}
      width={"75%"}
      ref={el => pageRefs.current = { ...pageRefs.current, experience: el }}>
      {loaded && <HeroDividers orientation={"topleft"} />}
      <SectionHeader label={"03. My Experience"} visRef={visRef} />
      {loaded &&
        <Flex
          // animation={testAnim}
          animation={visible && flashAnim}
          marginTop={"5%"}
          height={600}
          width={600}
          alignItems={"center"}
          justifyContent={"center"}>
          <Hexagon
            top={visible ? "-25%" : 0}
            left={visible ? "-14.7%" : 0}
            color={"goldenrod"}
            edgeLen={100} />
          <Hexagon
            top={visible ? "-25%" : 0}
            left={visible? "14.7%" : 0}
            color={"goldenrod"}
            transitionDelay={"30ms"}
            edgeLen={100} />
          {/* <Hexagon
            top={visible ? "0.5%" : 0}
            color={"goldenrod"}
            edgeLen={100} /> */}
          <Hexagon
            top={visible ? "0.5%" : 0}
            left={visible ? "29.4%" : 0}
            color={"goldenrod"}
            transitionDelay={"60ms"}
            edgeLen={100} />
          <Hexagon
            top={visible ? "26%" : 0}
            left={visible ? "14.7%" : 0}
            color={"goldenrod"}
            transitionDelay={"90ms"}
            edgeLen={100} />
          <Hexagon
            top={visible ? "26%" : 0}
            left={visible ? "-14.7%" : 0}
            color={"goldenrod"}
            transitionDelay={"120ms"}
            edgeLen={100} />
          <Hexagon
            top={visible ? "0.5%" : 0}
            left={visible ? "-29.4%" : 0}
            color={"goldenrod"}
            transitionDelay={"150ms"}
            edgeLen={100} />
        </Flex>
      }
    </Flex>
  );
};