import {
  Flex,
  Center,
  Stack,
  Text,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";

import { fadeRight } from "../helpers/animations";
import { PageProps } from "../helpers/interfaces";
import { SpinHex } from "./SpinHex";
import { HeroDividers } from "./HeroDividers";

export const Home = ({ pageRefs }: PageProps) => {
  const fadeRightAnim1: string = `${fadeRight} 1s 100ms forwards`;
  const fadeRightAnim2: string = `${fadeRight} 1s 250ms forwards`;
  const fadeRightAnim3: string = `${fadeRight} 1s 400ms forwards`;

  return (
    <Flex
      alignItems={"center"}
      boxSizing={"border-box"}
      flexDirection={{ base: "column", md: "row" }}
      height={"100vh"}
      position={"relative"}
      width={"75%"}
      ref={el => pageRefs.current = { ...pageRefs.current, home: el }}>
      <Stack flexBasis={{ base: 0, md: "66%"}} marginTop={{ base: 40, md: 0 }}>
        <Text>
          <Heading
            animation={fadeRightAnim1}
            fontSize={{ base: 36, sm: 48, md: 56, lg: 64 }}
            fontFamily={"var(--chakra-fonts-mono)"}
            opacity={0}
            marginY={4}
            width={"fit-content"}>
            <span>
              <span style={{
                color: "goldenrod",
                textShadow: useColorModeValue("none", "0 0 5px goldenrod")
              }}>T</span>
              erry
              <span style={{
                color: "goldenrod",
                textShadow: useColorModeValue("none", "0 0 5px goldenrod")
              }}> S</span>
              . 
              <span style={{
                color: "goldenrod",
                textShadow: useColorModeValue("none", "0 0 5px goldenrod")
              }}> Z</span>
              hou
            </span>
          </Heading>
          <Heading
            animation={fadeRightAnim2}
            fontSize={{ base: 24, sm: 36, md: 42, lg: 48 }}
            fontFamily={"var(--chakra-fonts-mono)"}
            opacity={0}
            marginLeft={12}
            marginY={4}
            width={"fit-content"}>
            Front-End Engineer
          </Heading>
          <Text
            animation={fadeRightAnim3}
            marginLeft={24}
            fontFamily={"var(--chakra-fonts-mono)"}
            fontSize={{ base: 12, md: 14, lg: 16 }}
            opacity={0}
            marginY={4}
            width={"80%"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </Text>
        </Text>
      </Stack>
      <Center flexBasis={"33%"} marginRight={"20%"}>
        <SpinHex />
      </Center>
      <HeroDividers orientation={"topright"} />
    </Flex>
  );
};
