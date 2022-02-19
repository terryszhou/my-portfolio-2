import { Flex } from "@chakra-ui/react";
import React from "react";
import { PageProps } from "../interfaces";

export const Contact = ({ pageRefs, isVisible, domRefs }: PageProps) => {
  return (
    <Flex
      h={"100vh"}
      w={"100%"}
      boxSizing={"border-box"}
      ref={el => pageRefs.current = { ...pageRefs.current, contact: el }}
    >
      Contact
    </Flex>
  );
};