import {
  Box,
  Flex,
  Center,
  Stack,
  Text,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";

import { fadeRight } from "../helpers/animations";
import { PageProps } from "../helpers/interfaces";
import { SpinHex } from "./SpinHex";
import { HeroDividers } from "./HeroDividers";

export const Home = ({ pageRefs, visRef, visible }: PageProps) => {
  const fadeRightAnim1: string = `${fadeRight} 1s 100ms forwards`;
  const fadeRightAnim2: string = `${fadeRight} 1s 250ms forwards`;
  const fadeRightAnim3: string = `${fadeRight} 1s 400ms forwards`;
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible])

  return (
    <Flex
      transition={"1s ease-out"}
      opacity={visible ? 1 : 0.25}
      alignItems={"center"}
      boxSizing={"border-box"}
      flexDirection={{ base: "column", md: "row" }}
      height={"100vh"}
      position={"relative"}
      width={"75%"}
      ref={el => pageRefs.current = { ...pageRefs.current, home: el }}>
      <Stack
        flexBasis={{ base: 0, md: "66%"}}
        marginTop={{ base: 40, md: 0 }}
        ref={visRef}>
        <Box>
          <Heading
            animation={fadeRightAnim1}
            fontSize={{ base: 36, sm: 48, md: 56, lg: 64 }}
            fontFamily={"var(--chakra-fonts-mono)"}
            opacity={0}
            marginY={4}
            display={"flex"}
            alignItems={"center"}
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
            <Image
              boxSize={{ base: "40px", lg: "50px" }}
              filter={useColorModeValue("none", "drop-shadow(0 0 2px red)")}
              marginLeft={{ base: 2, lg: 4 }}
              src={"/seal-sig.png"} />
          </Heading>
          <Heading
            animation={fadeRightAnim2}
            fontSize={{ base: 24, sm: 36, md: 42, lg: 48 }}
            fontFamily={"var(--chakra-fonts-mono)"}
            opacity={0}
            marginY={4}
            width={"fit-content"}>
            Front-End Engineer
          </Heading>
          <Text
            animation={fadeRightAnim3}
            fontFamily={"var(--chakra-fonts-mono)"}
            fontSize={{ base: 12, md: 14, lg: 16 }}
            opacity={0}
            marginY={4}
            width={"80%"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </Text>
        </Box>
      </Stack>
      <Center flexBasis={"33%"} marginRight={"20%"}>
        <SpinHex />
      </Center>
      {loaded && <HeroDividers orientation={"topright"} />}
    </Flex>
  );
};
