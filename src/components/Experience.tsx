import { Flex } from "@chakra-ui/react";
import React from "react";
import { NavProps } from "../interfaces";

export const Experience = ({ pageRefs }: NavProps) => {
  return (
    <Flex
      h={"100vh"}
      w={"100%"}
      bgColor={"blue"}
      boxSizing={"border-box"}
      ref={el => pageRefs.current = { ...pageRefs.current, experience: el }}
    >
      Experience
    </Flex>
  );
};