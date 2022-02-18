import { Flex } from "@chakra-ui/react";
import React from "react";
import { NavProps } from "../interfaces";

export const About = ({ pageRefs }: NavProps) => {
  return (
    <Flex
      h={"100vh"}
      w={"100%"}
      bgColor={"red"}
      boxSizing={"border-box"}
      ref={el => pageRefs.current = { ...pageRefs.current, about: el }}
    >
      About
    </Flex>
  );
};