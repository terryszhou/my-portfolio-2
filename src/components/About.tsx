import {
  Flex,
  Stack,
  HStack,
  Box,
  Heading,
  Icon,
  IconButton,
  Text,
  Image,
  Button,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import * as React from "react";

import { PageProps } from "../helpers/interfaces";
import { Hexagon } from "./Hexagon";
import { fadeRight, slideLeft, slideRight } from "../helpers/animations";

export const About = ({ pageRefs, isVisible, domRefs }: PageProps) => {
  const slideLeftAnim: string = `${slideLeft} 1s 250ms forwards`;
  const slideRightAnim: string = `${slideRight} 1s 250ms forwards`;
  
  return (
    <Flex
      alignItems={"center"}
      boxSizing={"border-box"}
      flexDirection={{ base: "column", lg: "row" }}
      height={"100vh"}
      position={"relative"}
      width={"75%"}
      ref={el => pageRefs.current = { ...pageRefs.current, about: el }}>
      <Flex
        flexDirection={"column"}
        height={{ base: "40%", lg: "80%" }}
        paddingTop={{base: "3rem", lg: "1rem" }}
        paddingX={"1rem"}
        width={{ base: "100%", lg: "50%" }}>
        <Box 
          animation={slideRightAnim}
          backgroundColor={"goldenrod"}
          top={{ base: "4%", lg: "8%" }}
          boxShadow={useColorModeValue("none", "0 0 5px goldenrod")}
          height={2}
          left={"-16.5%"}
          opacity={0}
          position={"absolute"}
          width={"50%"}
          _after={{
            borderTop: "8px solid goldenrod",
            borderRight: "8px solid transparent",
            content: `""`,
            filter: useColorModeValue("none", "drop-shadow(2px 0 5px goldenrod)"),
            height: 0,
            position: "absolute",
            right: -2,
            width: 0,
          }}/>
        <Box 
          animation={slideLeftAnim}
          backgroundColor={"goldenrod"}
          boxShadow={useColorModeValue("none", "0 0 5px goldenrod")}
          height={2}
          opacity={1}
          position={"absolute"}
          right={"-16.5%"}
          bottom={"4%"}
          zIndex={1}
          _before={{
            borderLeft: "8px solid transparent",
            borderBottom: "8px solid goldenrod",
            content: `""`,
            filter: useColorModeValue("none", "drop-shadow(-2px 0 5px goldenrod)"),
            height: 0,
            left: -2,
            position: "absolute",
            width: 0,
          }} />
        <HStack spacing={6}>
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
            }}>01.</span> About Me
          </Heading>
          <Image
            filter={useColorModeValue("none", "drop-shadow(0 0 2px red)")}
            boxSize={{ base: "40px", lg: "50px" }}
            src={"/seal-sig.png"} />
        </HStack>
        <Text
          opacity={0.7}
          marginTop={{base: "1rem", lg: "2rem" }}
          fontFamily={"var(--chakra-fonts-nunito)"}
          fontSize={{ base: "sm", lg: "lg" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
        <Text
          opacity={0.7}
          marginTop={"1rem"}
          fontFamily={"var(--chakra-fonts-nunito)"}
          fontSize={{ base: "sm", lg: "lg" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
        <Table
          fontFamily={"var(--chakra-fonts-mono)"}
          fontSize={{ base: "xs", lg: "sm" }}
          variant={"striped"}
          marginTop={"1rem"}
        >
          <Tbody>
            <Tr>
              <Td>Test</Td>
              <Td>Test</Td>
              <Td>Test</Td>
            </Tr>
            <Tr>
              <Td>Test</Td>
              <Td>Test</Td>
              <Td>Test</Td>
            </Tr>
            <Tr>
              <Td>Test</Td>
              <Td>Test</Td>
              <Td>Test</Td>
            </Tr>
          </Tbody>
        </Table>
      </Flex>
      <Flex
        alignItems={"center"}
        flexDirection={"column"}
        height={{ base: "50%", lg: "80%" }}
        paddingTop={{ base: "16rem", sm: "10rem", lg: "5rem" }}
        paddingX={"1rem"}
        width={{ base: "100%", lg: "50%" }}>
        <Box
          role={"group"}
          border={"2px solid goldenrod"}
          borderRadius={5}
          boxShadow={useColorModeValue("none", "0 0 10px goldenrod")}
          padding={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
          transition={"200ms ease-out"}
          _hover={{
            backgroundColor: "goldenrod"
          }}
          width={{ base: "50%", lg: "70%" }}>
          <Image
            borderRadius={5}
            _groupHover={{ visibility: "hidden" }}
            src={"/headshot-shoulders.jpg"} />
          <Image
            visibility={"hidden"}
            width={"70%"}
            position={"absolute"}
            src={"/headshot-outline.png"}
            _groupHover={{ visibility: "visible" }}
          />
        </Box>
      </Flex>
    </Flex>
  );
};