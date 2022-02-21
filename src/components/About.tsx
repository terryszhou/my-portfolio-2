import {
  Flex,
  HStack,
  Box,
  Heading,
  Text,
  Image,
  useColorModeValue,
  useColorMode,
  Center,
  Divider,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import * as React from "react";

import { PageProps } from "../helpers/interfaces";
import { qAndA } from "../data/qAndA";
import { HeroDividers } from "./HeroDividers";
import { ContentBox } from "./ContentBox";
import { SkillTable } from "./SkillTable";

export const About = ({ pageRefs, isVisible }: PageProps) => {
  const { colorMode } = useColorMode();

  const qAndAData = qAndA.map(e => (
    <React.Fragment>
      <Flex
        alignItems={"center"}
        fontFamily={"var(--chakra-fonts-nunito)"}
        fontSize={{ base: "xs", sm: "sm", lg: "md" }}
        justifyContent={"flex-start"}
        width={"100%"}>
        <Text
          backgroundColor={colorMode === "light" ? "rgb(233,233,233)" : "rgb(37,37,37)"}
          borderRadius={10}
          padding={2}
          position={"relative"}
          maxWidth={"75%"}
          _before={{
            position: "absolute",
            content: `""`,
            width: 0,
            height: 0,
            bottom: "-1rem",
            borderRight: "30px solid transparent",
            borderTop: colorMode === "light" ? "25px solid rgb(233,233,233)" : "25px solid rgb(37,37,37)" }}>
          {e.question}
        </Text>
      </Flex>
      <Flex
        alignItems={"center"}
        fontFamily={"var(--chakra-fonts-nunito)"}
        fontSize={{ base: "xs", sm: "sm", lg: "md" }}
        justifyContent={"flex-end"}
        width={"100%"}>
        <Text
          backgroundColor={"rgb(67,134,233)"}
          borderRadius={10}
          color={"white"}
          padding={2}
          position={"relative"}
          maxWidth={"75%"}
          _before={{
            position: "absolute",
            content: `""`,
            width: 0,
            height: 0,
            right: "3%",
            bottom: "-1rem",
            borderLeft: "30px solid transparent",
            borderTop: "25px solid rgb(67,134,233)" }}>
            {e.answer}
            {e.answer === "Nidoking!" &&
              <Image
                src={"/nidoking.png"}
                width={"6em"} />}
        </Text>
      </Flex>
    </React.Fragment>
  ));

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
        <HeroDividers orientation={"topleft"} />
        <HStack spacing={6}>
          <Divider
            borderColor={useColorModeValue("black", "white")}
            left={"-20%"}
            position={"absolute"}
            width={"20%"} />
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
        <ContentBox>
          {qAndAData}
        </ContentBox>
      </Flex>
      <Flex
        alignItems={{base: "center", lg: "flex-end"}}
        flexDirection={"column"}
        height={{ base: "50%", lg: "80%" }}
        paddingTop={{base: "3rem", lg: "6rem" }}
        paddingX={"1rem"}
        width={{ base: "100%", lg: "50%" }}>
        <Box
          alignItems={"center"}
          border={"2px solid goldenrod"}
          borderRadius={5}
          boxShadow={useColorModeValue("none", "0 0 10px goldenrod")}
          display={"flex"}
          justifyContent={"center"}
          padding={2}
          position={"relative"}
          role={"group"}
          transition={"200ms ease-out"}
          width={{ base: "50%", lg: "70%" }}
          _hover={{ backgroundColor: "goldenrod" }}>
          <Image
            borderRadius={5}
            _groupHover={{ visibility: "hidden" }}
            src={"/headshot-shoulders.jpg"} />
          <Image
            visibility={"hidden"}
            width={"70%"}
            position={"absolute"}
            src={"/headshot-outline.png"}
            _groupHover={{ visibility: "visible" }} />
        </Box>
        <SkillTable />
      </Flex>
    </Flex>
  );
};
