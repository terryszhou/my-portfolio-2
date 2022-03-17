import {
  Box,
  Flex,
  Center,
  Stack,
  Text,
  Heading,
  Image,
  useColorModeValue as uCMV,
  Tooltip,
  List,
  ListItem,
  ListIcon,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import * as React from "react";

import { BiRightArrow } from "react-icons/bi";

import { fadeRight } from "../helpers/animations";
import { PageProps } from "../helpers/interfaces";
import { SpinHex } from "./SpinHex";
import { GoldSpan, GreenSpan } from "./ColorSpan";
import { HeroDividers } from "./HeroDividers";

export const Home = ({ pageRefs, visRef, visible }: PageProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const fadeRightAnim1: string | undefined = prefersReducedMotion ? undefined : `${fadeRight} 250ms 250ms forwards`;
  const fadeRightAnim2: string | undefined = prefersReducedMotion ? undefined : `${fadeRight} 250ms 400ms forwards`;
  const fadeRightAnim3: string | undefined = prefersReducedMotion ? undefined : `${fadeRight} 250ms 550ms forwards`;
  const fadeRightAnim4: string | undefined = prefersReducedMotion ? undefined : `${fadeRight} 250ms 700ms forwards`;
  const goldShadow: string = uCMV("none","drop-shadow(0 0 5px goldenrod)");
  const greenShadow: string = uCMV("none","drop-shadow(0 0 5px green)");
  const redShadow: string = uCMV("drop-shadow(0 0 5px red)","none");

  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible]);

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
          <Text
            animation={fadeRightAnim1}
            color={"green.500"}
            filter={greenShadow}
            fontFamily={"var(--chakra-fonts-mono)"}
            opacity={0}>
            Hey y'all! My name's
          </Text>
          <Heading
            animation={fadeRightAnim2}
            fontSize={{ base: 36, sm: 48, md: 56, lg: 64 }}
            fontFamily={"var(--chakra-fonts-mono)"}
            opacity={0}
            marginY={4}
            display={"flex"}
            alignItems={"center"}
            width={"fit-content"}>
            <Text as={"span"}>
              <GoldSpan>T</GoldSpan>
              {`erry `}
              <GoldSpan>S</GoldSpan>
              {`. `}
              <GoldSpan>Z</GoldSpan>
              {`hou `}
            </Text>
            <Tooltip hasArrow label={
              <Stack fontFamily={"var(--chakra-fonts-nunito)"}>
                <Text>汉字: <Text as={"span"} color={"red"} filter={redShadow}>周思佳</Text></Text>
                <Text>Pīnyīn: <Text as={"span"} color={"red"} filter={redShadow}>Zhōu Sījīa</Text></Text>
                <Text><Text as={"span"} color={"red"} filter={redShadow}>周 Zhōu</Text>: The longest-lived dynasty in Chinese history.</Text>
                <Text><Text as={"span"} color={"red"} filter={redShadow}>思 Sī</Text>: (to) think</Text>
                <Text><Text as={"span"} color={"red"} filter={redShadow}>佳 Jīa</Text>: (with) excellence & beauty</Text>
              </Stack> }>
              <Image
                boxSize={{ base: "40px", lg: "50px" }}
                cursor={"pointer"}
                filter={uCMV("none","drop-shadow(0 0 2px red)")}
                marginLeft={{ base: 2, lg: 4 }}
                src={"/seal-sig.png"}
                transition={"200ms ease-in-out"}
                _hover={{ transform: "scale(1.1)" }} />
            </Tooltip>
          </Heading>
          <Heading
            animation={fadeRightAnim3}
            color={"goldenrod"}
            filter={uCMV("none","drop-shadow(0 0 2px goldenrod)")}
            fontSize={{ base: 24, sm: 36, md: 42, lg: 48 }}
            fontFamily={"var(--chakra-fonts-mono)"}
            opacity={0}
            marginY={4}
            width={"fit-content"}>
            Front-End Engineer
          </Heading>
          <List animation={fadeRightAnim4} opacity={0} spacing={-5}>
            <ListItem alignItems={"center"} display={"flex"}>
              <ListIcon
                as={BiRightArrow}
                color='green.500' 
                filter={greenShadow} />
              <Text
                color={uCMV("rgba(44,44,44,0.8)","rgba(180,180,180,0.8)")}
                fontFamily={"var(--chakra-fonts-nunito)"}
                fontSize={{ base: 14, md: 16, lg: 18 }}
                marginY={6}
                width={"80%"}>
                I'm a
                <GreenSpan> software engineer</GreenSpan> based out of Austin, TX.
              </Text>
            </ListItem>
            <ListItem alignItems={"center"} display={"flex"}>
              <ListIcon
                as={BiRightArrow}
                color='green.500' 
                filter={greenShadow} />
              <Text
                color={uCMV("rgba(44,44,44,0.8)","rgba(180,180,180,0.8)")}
                fontFamily={"var(--chakra-fonts-nunito)"}
                fontSize={{ base: 14, md: 16, lg: 18 }}
                marginY={6}
                width={"80%"}>
                I like writing
                <GreenSpan> code</GreenSpan> that's
                <GoldSpan> practical</GoldSpan>, <GoldSpan>scalable</GoldSpan>, and <GoldSpan>stylish</GoldSpan>
              </Text>
            </ListItem>
            <ListItem alignItems={"center"} display={"flex"}>
              <ListIcon
                as={BiRightArrow}
                color='green.500' 
                filter={greenShadow} />
              <Text
                color={uCMV("rgba(44,44,44,0.8)","rgba(180,180,180,0.8)")}
                fontFamily={"var(--chakra-fonts-nunito)"}
                fontSize={{ base: 14, md: 16, lg: 18 }}
                marginY={6}
                width={"80%"}>
                Have an opportunity for me? Let's
                <Text
                  as={"a"}
                  color={"goldenrod"}
                  filter={goldShadow}
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
                  {` get in touch!`}
                </Text>
              </Text>
            </ListItem>
          </List>
        </Box>
      </Stack>
      <Center flexBasis={"33%"} marginRight={"20%"}>
        <SpinHex />
      </Center>
      {loaded && <HeroDividers orientation={"topright"} />}
    </Flex>
  );
};
