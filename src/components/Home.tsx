import {
  Flex,
  Box,
  Center,
  Stack,
  Image,
  useColorMode,
  HStack,
  Text,
  Heading,
  keyframes,
} from "@chakra-ui/react";
import React from "react";
import { PageProps } from "../interfaces";
import { SpinHex } from "./SpinHex";
import { Social } from "./Social";

const fadeRight: string = keyframes`
  from {
    transform: translateX(-40px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const slideRight: string = keyframes`
  from { 
    transform: translateX(-100%);
    opacity: 0;
  } to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideLeft: string = keyframes`
  from { 
    width: 0;
    opacity: 0;
  } to {
    width: 40%;
    opacity: 1;
  }
`;

export const Home = ({ pageRefs, isVisible }: PageProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const fadeRightAnim1: string = `${fadeRight} 1s 100ms forwards`;
  const fadeRightAnim2: string = `${fadeRight} 1s 250ms forwards`;
  const fadeRightAnim3: string = `${fadeRight} 1s 400ms forwards`;
  const slideRightAnim: string = `${slideRight} 1s 250ms forwards`;
  const slideLeftAnim: string = `${slideLeft} 1s 250ms forwards`;

  return (
    <Flex
      alignItems={"center"}
      flexDirection={{ base: "column", md: "row" }}
      position={"relative"}
      height={"100vh"}
      width={"75%"}
      boxSizing={"border-box"}
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
              <span style={{ color: "goldenrod" }}>T</span>
              erry
              <span style={{ color: "goldenrod" }}> S. Z</span>
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
        <SpinHex colorMode={colorMode} />
      </Center>
      <Box 
        animation={slideLeftAnim}
        position={"absolute"}
        height={2}
        opacity={1}
        bgColor={"goldenrod"}
        top={"15%"}
        right={"-16.5%"}
        zIndex={1}
        _before={{
          position: "absolute",
          content: `""`,
          width: 0,
          height: 0,
          borderTop: "8px solid goldenrod",
          borderLeft: "8px solid transparent",
          left: -2
        }} />
      <Box 
        animation={slideRightAnim}
        position={"absolute"}
        height={2}
        width={"50%"}
        opacity={0}
        bgColor={"goldenrod"}
        bottom={"2%"}
        left={"-16.5%"}
        _after={{
          position: "absolute",
          content: `""`,
          width: 0,
          height: 0,
          borderBottom: "8px solid goldenrod",
          borderRight: "8px solid transparent",
          right: -2
        }}/>
    </Flex>
  );
};
