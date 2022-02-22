import { Flex, Box, Text, Heading, List, ListItem, ListIcon, Divider, useColorModeValue } from "@chakra-ui/react";
import React from "react";

import { ContentBox } from "./ContentBox";
import { ExperienceWheel } from "./ExperienceWheel";
import { flash } from "../helpers/animations";
import { PageProps } from "../helpers/interfaces";
import { HeroDividers } from "./HeroDividers";
import { SectionHeader } from "./SectionHeader";

import { BiRightArrow } from "react-icons/bi";

export const Experience = ({ pageRefs, visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible]);

  const [rotation, setRotation] = React.useState<number>(0);
  React.useEffect((): void => rotation && setRotation(rotation), [rotation]);

  const flashAnim: string = `${flash} 1000ms`;

  return (
    <Flex
      transition={"1s ease-out"}
      opacity={visible ? 1 : 0.25}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={{ base: "column", lg: "row" }}
      height={{ base: "fit-content", lg: "100vh" }}
      position={"relative"}
      width={"75%"}
      ref={el => pageRefs.current = { ...pageRefs.current, experience: el }}>
      {loaded && <HeroDividers orientation={"topleft"} />}
      <SectionHeader label={"03. My Experience"} />
      <Flex width={"100%"} justifyContent={"space-between"} flexDirection={{ base: "column", lg: "row" }}>
        <Box width={{ base: "100%", lg: "50%"}} marginTop={{ base: "2rem", lg: "0rem" }}>
          <Flex
            animation={visible && flashAnim}
            marginTop={"5%"}
            height={600}
            width={600}
            alignItems={"center"}
            justifyContent={"center"}
            ref={visRef}>
            {loaded && 
              <ExperienceWheel
                rotation={rotation}
                setRotation={setRotation} 
                visible={visible} />}
          </Flex>
        </Box>
        <Box width={{base: "100%", lg: "50%"}} padding={20} paddingLeft={40}>
          <ContentBox>
            <Text>
              <Heading
                fontFamily={"var(--chakra-fonts-mono)"}
                fontSize={"xl"}
                marginBottom={2}
                textAlign={"center"}>
                Restoic
              </Heading>
              <List fontFamily={"var(--chakra-fonts-nunito)"} fontSize={"sm"} spacing={3}>
                <ListItem>
                  <ListIcon as={BiRightArrow} color='green.500' />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <ListItem>
                  <ListIcon as={BiRightArrow} color='green.500' />
                  Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </ListItem>
                <ListItem>
                  <ListIcon as={BiRightArrow} color='green.500' />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
              </List>
              <Divider borderColor={useColorModeValue("black", "white")} marginY={4} />
              <Text
                fontFamily={"var(--chakra-fonts-nunito)"}
                fontSize={"sm"}
                textAlign={"center"}>
                React Native, XCode, Android Studio
              </Text>
              <Divider borderColor={useColorModeValue("black", "white")} marginY={4} />
              <Text
                color={"goldenrod"}
                fontFamily={"var(--chakra-fonts-nunito)"}
                fontSize={"sm"}
                textAlign={"center"}>
                App Store | Google Play Store
              </Text>
            </Text>
          </ContentBox>
        </Box>
      </Flex>
    </Flex>
  );
};
