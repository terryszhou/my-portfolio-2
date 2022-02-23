import { Flex, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

interface MinimalBoxProps {
  children?: JSX.Element | JSX.Element[],
  height?: string | number | {},
};

export const MinimalBox = ({ children, height }: MinimalBoxProps) => {
  return (
    <Flex
      flexDirection={"column"}
      height={height}
      backgroundColor={useColorModeValue("white", "black")}
      border={useColorModeValue("1px solid black", "1px solid white")}
      borderRadius={15}
      overflow={"scroll"}
      paddingX={"2%"}
      paddingY={"5%"}>
      {children}
    </Flex>
  );
};