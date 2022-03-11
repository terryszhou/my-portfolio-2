import { Flex, Box, Image, HStack, Text, useColorModeValue as uCMV } from "@chakra-ui/react";
import React from "react";

import { fadeOut, shake, slideUp, openLetter } from "../helpers/animations";
import { PageProps } from "../helpers/interfaces";
import { HeroShell } from "./HeroShell";

export const Contact = ({ pageRefs, visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible]);

  const openLetterAnim: string = `${openLetter} 500ms ease-in-out forwards`;
  const slideUpAnim: string = `${slideUp} 500ms 500ms ease-in-out forwards`;
  const bgColor1: string = uCMV("black","white");
  const bgColor2: string = uCMV("rgb(230,230,230)","rgb(27,32,43)");
  const textShadow: string = uCMV("none","drop-shadow(0 0 5px goldenrod)");
  const redShadow: string = uCMV("none","drop-shadow(0 0 2px red)");
  const fadeOutAnim: string = `${fadeOut} 750ms ease-in-out forwards`;
  const shakeAnim: string = `${shake} 200ms ease-in-out`;

  return (
    <HeroShell
      label={"05. Let's Get in Touch"}
      loaded={loaded}
      pageRefs={pageRefs}
      refNum={5}
      visible={visible}>
      <Flex
        alignItems={"center"}
        flexDirection={"column"}
        height={{ base: "85vw", sm: "65vw", lg: "45vw" }}
        justifyContent={"center"}
        ref={visRef}
        width={{ base: "85vw", sm: "65vw", lg: "45vw" }}>
        <Box
          alignItems={"center"}
          animation={visible && shakeAnim}
          border={"1px solid"}
          borderRadius={5}
          boxShadow={"0 25px 20px -20px black"}
          display={"flex"}
          height={"50%"}
          justifyContent={"center"}
          position={"relative"}
          top={"10%"}
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
          {loaded && (
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
                border={'1px solid'}
                clipPath={"polygon(0% 0%, 50% 50%, 100% 0%)"}
                height={"100%"}
                position={"absolute"}
                width={"100.5%"}
                zIndex={1}
                _before={{
                  backgroundColor: bgColor2,
                  clipPath: "polygon(0% -1%, 50% 49%, 100% -1%)",
                  content: `""`,
                  inset: 0,
                  position: "absolute" }} />
              <Box
                animation={slideUpAnim}
                backgroundColor={bgColor2}
                border={".5px solid"}
                borderRadius={5}
                fontFamily={"var(--chakra-fonts-mono)"}
                fontSize={{ base: "10px", sm: "xs", lg: "md"}}
                height={"90%"}
                padding={"5%"}
                position={"absolute"}
                width={"90%"}>
                <Flex flexDirection={"column"} width={"90%"} opacity={.8}>
                  <Text fontWeight={"bold"}>Dear Viewer,</Text>
                  <Text marginY={"5%"} textAlign={"left"}>
                    {`Let's get in touch! You can email me `}
                    <Text
                      as={"a"}
                      color={"goldenrod"}
                      filter={textShadow}
                      href={"mailto:terryszhou@gmail.com"}
                      position={"relative"}
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
                        here
                    </Text>
                    {`, or text me at `}
                    <Text
                      as={"a"}
                      color={"goldenrod"}
                      filter={textShadow}
                      href={"sms:1-925-384-3787"}
                      position={"relative"}
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
                        _before: { width: "100%" } }}>
                        925-384-3787
                    </Text>
                      .
                  </Text>
                  <Text>Hope to speak soon!</Text>
                  <HStack marginY={"5%"}>
                    <Image
                      boxSize={"7.5%"}
                      filter={redShadow}
                      src={"/seal-sig.png"} />
                    <Text>Terry S. Zhou</Text>
                  </HStack>
                </Flex>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Flex>
      <Box />
    </HeroShell>
  );
};
