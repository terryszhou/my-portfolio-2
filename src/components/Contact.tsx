import { Flex, Box, Image, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

import { fadeOut, shake, slideUp, openLetter } from "../helpers/animations";
import { PageProps } from "../helpers/interfaces";
import { HeroShell } from "./HeroShell";

export const Contact = ({ pageRefs, visible, visRef }: PageProps) => {
  const openLetterAnim: string = `${openLetter} 500ms ease-in-out forwards`;
  const slideUpAnim: string = `${slideUp} 500ms 500ms ease-in-out forwards`;
  const bgColor1: string = useColorModeValue("black", "white");
  const bgColor2: string = useColorModeValue("white", "rgb(27,32,43)");
  const textShadow: string = useColorModeValue("none", "drop-shadow(0 0 5px goldenrod)");
  const redShadow: string = useColorModeValue("none", "drop-shadow(0 0 2px red)");
  const fadeOutAnim: string = `${fadeOut} 750ms ease-in-out forwards`;
  const shakeAnim: string = `${shake} 200ms ease-in-out`;

  return (
    <HeroShell
      label={"04. Let's Get in Touch"}
      pageRefs={pageRefs}
      refNum={4}
      visible={visible}>
      <Flex
        alignItems={"center"}
        height={"45vw"}
        justifyContent={"center"}
        ref={visRef}
        width={"45vw"}>
        <Box
          alignItems={"center"}
          animation={visible && shakeAnim}
          border={"2px solid"}
          borderRadius={5}
          boxShadow={"0 25px 20px -20px black"}
          display={"flex"}
          height={"50%"}
          justifyContent={"center"}
          position={"relative"}
          width={"100%"}
          _before={{
            backgroundColor: bgColor1,
            clipPath: "polygon(0% 0%, 50% 50%, 100% 0%, 100% 100%, 0% 100%)",
            content: `""`,
            inset: 0,
            position: "absolute",
            zIndex: 1 }}
          _after={{
            backgroundColor: bgColor2,
            clipPath: "polygon(0% 1%, 50% 51%, 100% 1%, 100% 100%, 0% 100%)",
            content: `""`,
            inset: 0,
            position: "absolute",
            zIndex: 1 }}>
          {visible && (
            <React.Fragment>
              <Image 
                animation={fadeOutAnim}
                filter={redShadow}
                opacity={1}
                src={"/seal-sig.png"}
                zIndex={2} />
              <Box
                animation={openLetterAnim}
                backgroundColor={bgColor1}
                border={'2px solid'}
                clipPath={"polygon(0% 0%, 50% 50%, 100% 0%)"}
                height={"100%"}
                position={"absolute"}
                width={"100.5%"}
                _before={{
                  backgroundColor: bgColor2,
                  clipPath: "polygon(0% -1%, 50% 49%, 100% -1%)",
                  content: `""`,
                  inset: 0,
                  position: "absolute" }} />
              <Box
                animation={slideUpAnim}
                backgroundColor={bgColor2}
                border={"1px solid"}
                borderRadius={5}
                fontFamily={"var(--chakra-fonts-mono)"}
                fontSize={{ base: "xs", lg: "md"}}
                padding={5}
                position={"absolute"}
                height={"90%"}
                width={"90%"}>
                <Box width={"85%"}>
                  <Text fontWeight={"bold"}>Dear Viewer,</Text>
                  <Text marginY={5} textAlign={"center"}>
                    Let's get in touch! You can email me
                    <Text
                      as={"a"}
                      color={"goldenrod"}
                      filter={textShadow}
                      href={"mailto:terryszhou@gmail.com"}> here</Text>
                    , or text me at
                    <Text
                      as={"span"}
                      color={"goldenrod"}
                      filter={textShadow}> 925-384-3787</Text>
                      .
                  </Text>
                  <Text textAlign={"right"}>Hope to speak soon!</Text>
                  <HStack float={"right"} marginTop={5}>
                    <Image
                      boxSize={"35px"}
                      filter={redShadow}
                      marginLeft={{ base: 2, lg: 4 }}
                      src={"/seal-sig.png"} />
                    <Text>Terry S. Zhou</Text>
                  </HStack>
                </Box>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Flex>
      <Box />
    </HeroShell>
  );
};
