import {
  Flex,
  Box,
  Center,
  Stack,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { PageProps } from "../interfaces";
import { SpinHex } from "./SpinHex";

export const Home = ({ pageRefs, isVisible }: PageProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center
      position={"relative"}
      h={"100vh"}
      w={"90%"}
      boxSizing={"border-box"}
      ref={el => pageRefs.current = { ...pageRefs.current, home: el }}
    >
      <SpinHex colorMode={colorMode} />
      {/* <Image
        position={"absolute"}
        top={250}
        boxSize={36}
        src={"/seal-sig.png"}
      /> */}
    </Center>
  );
};
