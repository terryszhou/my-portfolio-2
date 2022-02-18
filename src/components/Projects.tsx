import { Flex } from "@chakra-ui/react";
import React from "react";
import { NavProps } from "../interfaces";

export const Projects = ({ pageRefs }: NavProps) => {
  return (
    <Flex
      h={"100vh"}
      w={"100%"}
      bgColor={"orange"}
      boxSizing={"border-box"}
      ref={el => pageRefs.current = { ...pageRefs.current, projects: el }}
    >
      Projects
    </Flex>
  );
};