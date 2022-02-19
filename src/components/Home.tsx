import { Flex, Box, Stack } from "@chakra-ui/react";
import React from "react";
import { PageProps } from "../interfaces";

export const Home = ({ pageRefs, isVisible }: PageProps) => {
  return (
    <Flex
      h={"100vh"}
      w={"100%"}
      boxSizing={"border-box"}
      ref={el => pageRefs.current = { ...pageRefs.current, home: el }}
    >
    </Flex>
  );
};
