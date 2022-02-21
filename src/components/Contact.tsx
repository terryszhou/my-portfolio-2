import { Flex } from "@chakra-ui/react";
import React from "react";
import { PageProps } from "../helpers/interfaces";

export const Contact = ({ pageRefs, visible }: PageProps) => {
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