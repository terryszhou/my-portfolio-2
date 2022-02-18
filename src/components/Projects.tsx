import { Flex } from "@chakra-ui/react";
import React from "react";
import { PageProps } from "../interfaces";

export const Projects = ({ pageRefs, isVisible, domRefs }: PageProps) => {
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