import { Flex, Box } from "@chakra-ui/react";
import React from "react";

import { ContentBox } from "./ContentBox";
import { ExperienceList } from "./ExperienceList";
import { ExperienceWheel } from "./ExperienceWheel";
import { flash } from "../helpers/animations";
import { PageProps } from "../helpers/interfaces";
import { HeroDividers } from "./HeroDividers";
import { SectionHeader } from "./SectionHeader";

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
        <Flex
          marginLeft={{ base: 8, lg: 0}}
          marginTop={{ base: "-20%", lg: 0 }}
          padding={20}
          width={{base: "100%", lg: "50%"}}>
          <ContentBox>
            <ExperienceList rotation={rotation} />
          </ContentBox>
        </Flex>
      </Flex>
    </Flex>
  );
};
