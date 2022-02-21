import { Flex } from "@chakra-ui/react";
import React from "react";
import { PageProps } from "../helpers/interfaces";
import { SectionHeader } from "./SectionHeader";
import { HeroDividers } from "./HeroDividers";
import { Hexagon } from "./Hexagon";

export const Experience = ({ isLargeScreen, pageRefs, visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible])

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
      <Flex
        marginTop={"5%"}
        height={600}
        width={600}
        alignItems={"center"}
        justifyContent={"center"}>
        <Hexagon
          top={"-25%"}
          left={"14.7%"}
          color={"goldenrod"}
          edgeLen={100} />
        <Hexagon
          top={"-25%"}
          left={"-14.7%"}
          color={"goldenrod"}
          edgeLen={100} />
        <Hexagon
          top={"0.5%"}
          color={"goldenrod"}
          edgeLen={100} />
        <Hexagon
          top={"0.5%"}
          left={"-29.4%"}
          color={"goldenrod"}
          edgeLen={100} />
        <Hexagon
          top={"0.5%"}
          left={"29.4%"}
          color={"goldenrod"}
          edgeLen={100} />
        <Hexagon
          top={"26%"}
          left={"-14.7%"}
          color={"goldenrod"}
          edgeLen={100} />
        <Hexagon
          top={"26%"}
          left={"14.7%"}
          color={"goldenrod"}
          edgeLen={100} />
      </Flex>
    </Flex>
  );
};