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
      flexDirection={{ base: "column", lg: "row" }}
      height={{ base: "140vh", lg: "100vh" }}
      position={"relative"}
      width={"75%"}
      ref={el => pageRefs.current = { ...pageRefs.current, experience: el }}>
      {loaded && <HeroDividers orientation={"topleft"} />}
      <SectionHeader label={"03. My Experience"} />
      <Flex
        height={{ base: "50%", lg: "100%" }}
        justifyContent={"center"}
        ref={visRef}
        width={{ base: "100%", lg: "50%" }}>
        <Flex
          position={"absolute"}
          top={0}
          animation={visible && flashAnim}
          marginTop={"10%"}
          height={600}
          width={600}
          alignItems={"center"}
          justifyContent={"center"}>
          {loaded && 
            <ExperienceWheel
              rotation={rotation}
              setRotation={setRotation} 
              visible={visible} />}
        </Flex>
      </Flex>
      <Flex
        padding={20}
        height={{ base: "50%", lg: "85%" }}
        width={{ base: "120%", lg: "50%" }}>
        <ContentBox>
          <ExperienceList rotation={rotation} />
        </ContentBox>
      </Flex>
    </Flex>
  );
};
