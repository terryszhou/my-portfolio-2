import { Flex } from "@chakra-ui/react";
import * as React from "react";

import { HeroDividers } from "./HeroDividers";
import { SectionHeader } from "./SectionHeader";

export const HeroShell = ({ children, visible, pageRefs, loaded }) => {
  return (
    <Flex
      alignItems={"center"}
      flexDirection={{ base: "column", lg: "row" }}
      height={"100vh"}
      opacity={visible ? 1 : 0.25}
      position={"relative"}
      ref={el => pageRefs.current = { ...pageRefs.current, about: el }}
      transition={"1s ease-out"}
      width={"75%"}>
      {loaded && <HeroDividers orientation={"topleft"} />}
      <SectionHeader label={"02. About Me"} />
      {children}
    </Flex>
  );
};