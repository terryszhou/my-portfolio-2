import { Divider, Heading, HStack, useColorModeValue } from "@chakra-ui/react"
import * as React from "react";

interface SectionHeaderProps {
  label: string,
  visRef: any,
};

export const SectionHeader = ({ label, visRef }: SectionHeaderProps) => {
  const number: string = label.split(".")[0] + "."
  const title: string = " " + label.split(".")[1]

  return (
    <HStack
      position={"absolute"}
      ref={visRef}
      spacing={6}
      top={{ base: "6%", lg: "12%" }}>
      <Divider
        borderColor={useColorModeValue("black", "white")}
        left={"-80%"}
        position={"absolute"}
        width={"80%"} />
      <Heading
        fontSize={{ base: "1.5rem", lg:"2rem" }}
        fontWeight={"bold"}
        fontFamily={"var(--chakra-fonts-mono)"}
        lineHeight={1}
        position={"relative"}
        width={"fit-content"}>
        <span style={{
          color: "goldenrod",
          textShadow: useColorModeValue("none", "0 0 5px goldenrod"),
        }}>{number}</span>{title}
      </Heading>
    </HStack>
  );
};