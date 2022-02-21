import { Flex, VStack, Text, Image, Icon, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { PageProps } from "../helpers/interfaces";
import { SectionHeader } from "./SectionHeader";
import { HeroDividers } from "./HeroDividers";
import { Hexagon } from "./Hexagon";
import { flash, rotate } from "../helpers/animations";

import { DiCompass } from "react-icons/di";

export const Experience = ({ pageRefs, visible, visRef }: PageProps) => {
  const { colorMode } = useColorMode();

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
      height={"100vh"}
      position={"relative"}
      width={"75%"}
      ref={el => pageRefs.current = { ...pageRefs.current, experience: el }}>
      {loaded && <HeroDividers orientation={"topleft"} />}
      <SectionHeader label={"03. My Experience"} visRef={visRef} />
      {loaded &&
        <Flex
          animation={visible && flashAnim}
          marginTop={"5%"}
          height={600}
          width={600}
          alignItems={"center"}
          justifyContent={"center"}>
          <Hexagon
            top={visible ? "0.5%" : 0}
            color={"transparent"}
            transitionDelay={"80ms"}
            width={170}>
            <Icon
              as={DiCompass}
              filter={colorMode === "light" ? "none" : "drop-shadow(0 0 5px goldenrod)"}
              boxSize={100}
              color={"goldenrod"}
              transition={"200ms ease-in-out"}
              transform={`rotate(${-45 + rotation}deg)`} />
          </Hexagon>
          <Hexagon
            top={visible ? "-25%" : 0}
            left={visible ? "-14.7%" : 0}
            color={"goldenrod"}
            width={170}>
            <Hexagon
              color={"linear-gradient(rgb(130,104,235), rgb(237,128,93) 90%)"}
              width={160}
              onMouseOver={() => setRotation(330)}
              _hover={{
                transform: "scale(1.2)",
                opacity: 0.8,
                zIndex: 1,
              }} />
          </Hexagon>
          <Hexagon
            top={visible ? "-25%" : 0}
            left={visible? "14.7%" : 0}
            color={"goldenrod"}
            transitionDelay={"40ms"}
            opacity={0.9}
            width={170}>
            <Hexagon
              color={"linear-gradient(rgb(230,60,42), rgb(170,170,170) 90%)"}
              width={160}
              onMouseOver={() => setRotation(30)}
              _hover={{
                transform: "scale(1.2)",
                zIndex: 1,
              }} />
          </Hexagon>
          <Hexagon
            top={visible ? "0.5%" : 0}
            left={visible ? "29.4%" : 0}
            color={"goldenrod"}
            transitionDelay={"80ms"}
            width={170}>
            <Hexagon
              color={"linear-gradient(rgb(108,37,152), rgb(189,54,54))"}
              width={160}
              onMouseOver={() => setRotation(90)}
              _hover={{
                transform: "scale(1.2)",
                zIndex: 1,
              }} />
          </Hexagon>
          <Hexagon
            top={visible ? "26%" : 0}
            left={visible ? "14.7%" : 0}
            color={"goldenrod"}
            transitionDelay={"120ms"}
            width={170}>
            <Hexagon
              color={"linear-gradient(rgb(193,98,204), rgb(142,232,232))"}
              width={160}
              onMouseOver={() => setRotation(150)}
              _hover={{
                transform: "scale(1.2)",
                zIndex: 1,
              }} />
          </Hexagon>
          <Hexagon
            top={visible ? "26%" : 0}
            left={visible ? "-14.7%" : 0}
            color={"goldenrod"}
            transitionDelay={"160ms"}
            width={170}>
            <Hexagon
              color={"linear-gradient(rgb(61,75,130), rgb(103, 194, 78))"}
              width={160}
              onMouseOver={() => setRotation(210)}
              _hover={{
                transform: "scale(1.2)",
                zIndex: 1,
              }} />
          </Hexagon>
          <Hexagon
            top={visible ? "0.5%" : 0}
            left={visible ? "-29.4%" : 0}
            color={"goldenrod"}
            transitionDelay={"200ms"}
            width={170}>
            <Hexagon
              color={"linear-gradient(rgb(99,40,52), rgb(204, 124, 39))"}
              width={160}
              onMouseOver={() => setRotation(270)}
              _hover={{
                transform: "scale(1.2)",
                zIndex: 1,
              }} />
          </Hexagon>
        </Flex>
      }
    </Flex>
  );
};