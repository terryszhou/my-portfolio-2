import { Flex } from "@chakra-ui/react";
import React from "react";
import { NavProps } from "../interfaces";

export const Contact = ({ pageRefs }: NavProps) => {
  return (
    <Flex
      h={"100vh"}
      w={"100%"}
      bgColor={"purple"}
      boxSizing={"border-box"}
      ref={el => pageRefs.current = { ...pageRefs.current, contact: el }}
    >
      Contact
    </Flex>
  );
};