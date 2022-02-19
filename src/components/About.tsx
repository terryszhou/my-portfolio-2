import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { PageProps } from "../interfaces";
import { Hexagon } from "./Hexagon";

export const About = ({ pageRefs, isVisible, domRefs }: PageProps) => {
  return (
    <Flex
      height={"100vh"}
      width={"100%"}
      boxSizing={"border-box"}
      ref={el => pageRefs.current = { ...pageRefs.current, about: el }}
    >
      About
      <Hexagon color={"goldenrod"} edgeLen={120}>
        <Hexagon color={"blue"} edgeLen={80}>
          <Hexagon color={"red"} edgeLen={40} />
        </Hexagon>
      </Hexagon>
    </Flex>
  );
};