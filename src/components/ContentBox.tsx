import { Center, VStack, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

interface ContentBoxProps {
  children?: JSX.Element | JSX.Element[]
}

export const ContentBox = ({ children }: ContentBoxProps) => {
  return (
    <Center
      border={"2px solid goldenrod"}
      height={"90%"}
      filter={useColorModeValue("none", "drop-shadow(0 0 5px goldenrod)")}
      marginTop={{ base: "1rem", lg: "2rem" }}
      position={"relative"}
      role={"group"}
      width={"100%"}
      _after={{
        border: "3vw solid transparent",
        borderBottom: "3vw solid goldenrod",
        bottom: "-4vw",
        content: `""`,
        position: "absolute",
        right: "-4vw",
        transform: "rotate(135deg)",
        transitionDuration: "0.2s" }}
      _before={{
        border: "3vw solid transparent",
        borderTop: "3vw solid goldenrod",
        content: `""`,
        left: "-4vw",
        position: "absolute",
        top: "-4vw",
        transform: "rotate(135deg)",
        transitionDuration: "0.2s" }}
      _hover={{
        _before: {
          left: "-3vw",
          top: "-3vw",
          zIndex: 2 },
        _after: {
          bottom: "-3vw",
          right: "-3vw",
          zIndex: 2 }}}>
      <VStack
        backgroundColor={useColorModeValue("white", "black")}
        border={"2px solid goldenrod"}
        borderRadius={10}
        height={"98%"}
        overflow={"scroll"}
        padding={{ base: 4, lg: 8}}
        transition={"150ms ease-in-out"}
        width={"98%"}
        _groupHover={{
          width: "100%",
          height: "100%",
          borderRadius: 0,
          transitionDuration: "0.2s" }}>
        {children}
      </VStack>
    </Center>
  );
};