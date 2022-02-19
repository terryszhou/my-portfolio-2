import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { PageProps } from "../helpers/interfaces";
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
    </Flex>
  );
};