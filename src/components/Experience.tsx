import { Flex } from "@chakra-ui/react";
import React from "react";
import { PageProps } from "../helpers/interfaces";

export const Experience = ({ pageRefs, isVisible, domRefs }: PageProps) => {
  return (
    <Flex
      h={"100vh"}
      w={"100%"}
      boxSizing={"border-box"}
      ref={el => pageRefs.current = { ...pageRefs.current, experience: el }}
    >
      Experience
    </Flex>
  );
};