import { Stack, Text, Image } from "@chakra-ui/react";
import * as React from "react";

import { GoldSpan } from "./ColorSpan";

export const Footer = () => (
  <Stack align={"center"} bottom={5} position={"absolute"}>
    <Image alt={"face-icon"} boxSize={10} src={"/favicon.ico"} />
    <Text
      as={"a"}
      fontFamily={"var(--chakra-fonts-mono)"}
      fontSize={12}
      href={"https://github.com/terryszhou"}
      rel={"noreferrer"}
      target={"_blank"}
      _before={{
        backgroundColor: "goldenrod",
        borderRadius: "5px",
        bottom: -1,
        content: `""`,
        height: "2px",
        position: "absolute",
        transition: "100ms ease-out",
        width: 0 }}
      _hover={{
        color: "goldenrod",
        _before: { width: "105%" } }}>
      <GoldSpan>Designed & Built by Terry S. Zhou</GoldSpan>
    </Text>
  </Stack>
);