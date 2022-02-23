import { Flex, Box, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

interface ContentBoxProps {
  children: JSX.Element | JSX.Element[],
  height?: string | number | {},
  width?: string | number | {},
};

export const ContentBox = ({ children, height, width }: ContentBoxProps) => {
  const boxGlow: string = useColorModeValue("none", "0 0 5px goldenrod");
  const darkGlow: string = useColorModeValue("none", "drop-shadow(0 0 5px goldenrod)");

  return (
    <Flex
      height={height}
      width={width}
      alignItems={"center"}
      flexDirection={"column"}
      padding={"5%"}
      position={"relative"}
      role={"group"}>
      <Flex
        alignItems={"center"}
        border={"2px solid goldenrod"}
        boxShadow={boxGlow}
        height={"100%"}
        justifyContent={"center"}
        minWidth={"18rem"}
        position={"relative"}
        _after={{
          border: "3vw solid transparent",
          borderBottom: "3vw solid goldenrod",
          bottom: "-4vw",
          content: `""`,
          filter: darkGlow,
          position: "absolute",
          right: "-4vw",
          transform: "rotate(135deg)",
          transitionDuration: "0.2s",
          zIndex: 2 }}
        _before={{
          border: "3vw solid transparent",
          borderTop: "3vw solid goldenrod",
          content: `""`,
          filter: darkGlow,
          left: "-4vw",
          position: "absolute",
          top: "-4vw",
          transform: "rotate(135deg)",
          transitionDuration: "0.2s",
          zIndex: 2 }}
        _groupHover={{
          _after: {
            bottom: "-3vw",
            right: "-3vw",
            transitionDuration: "0.2s" },
          _before: {
            left: "-3vw",
            top: "-3vw",
            transitionDuration: "0.2s" } }}>
        <Box
          border={"2px solid goldenrod"}
          borderRadius={"15px"}
          height={"95%"}
          overflow={"scroll"}
          padding={"5%"}
          position={"relative"}
          transition={"200ms ease-in-out"}
          width={"95%"}
          _groupHover={{
            borderRadius: 0,
            transform: "scale(1.06)",
            transitionDuration: "200ms" }}>
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};