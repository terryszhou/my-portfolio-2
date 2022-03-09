import {
  Flex,
  Stack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";

import { flash } from "../helpers/animations";
import { HeroShell } from "./HeroShell";
import { PageProps } from "../helpers/interfaces";
import { ProjectHex } from "./ProjectHex";
import { ProjectList } from "./ProjectList";
import { ProjectWheel } from "./ProjectWheel";
import { featuredProjectList } from "../data/featuredProjectData";

export const Projects = ({ pageRefs, visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible]);

  const [rotation, setRotation] = React.useState<number>(0);
  React.useEffect((): void => rotation && setRotation(rotation), [rotation]);

  const flashAnim: string = `${flash} 1000ms`;
  const { isOpen, onOpen, onClose } = useDisclosure()

  const featuredProjectMap = featuredProjectList.map((proj, i) => (
    <ProjectHex
      key={i}
      mainLink={proj.mainLink}
      dir={proj.dir}
      image={proj.image}
      title={proj.title}
      skills={proj.skills}
      details={proj.details}
      links={proj.links} />
  ));

  return (
    <HeroShell
      label={"03. Recent Projects"}
      pageRefs={pageRefs}
      refNum={3}
      visible={visible}>
      <Flex
        alignItems={"center"}
        animation={visible && flashAnim}
        height={"45vw"}
        justifyContent={"center"}
        ref={visRef}
        width={"45vw"}>
        {loaded && 
          <ProjectWheel
            onClick={onOpen}
            rotation={rotation}
            setRotation={setRotation} 
            visible={visible} />}
      </Flex>
      {/* <Stack
        marginTop={"5%"}
        ref={visRef}>
        {featuredProjectMap}
      </Stack> */}
      <ProjectList
        isOpen={isOpen}
        onClose={onClose}
        rotation={rotation} />
    </HeroShell>
  );
};
