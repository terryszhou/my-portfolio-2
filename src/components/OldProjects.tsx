import { Button, Flex, Stack, useColorModeValue as uCMV } from "@chakra-ui/react";
import * as React from "react";

import { GitCalendar } from "./GitCalendar";
import { HeroShell } from "./HeroShell";
import { PageProps } from "../helpers/interfaces";
import { ProjectGrid } from "./ProjectGrid";

export const OldProjects = ({ pageRefs, visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible]);

  const [more, setMore] = React.useState<boolean>(false);

  const goldShadow: string = uCMV("none","drop-shadow(0 0 5px goldenrod)");

  return (
    <HeroShell
      label={"04. Other Projects"}
      loaded={loaded}
      pageRefs={pageRefs}
      refNum={4}
      visible={visible}>
      <Stack align={"center"} ref={visRef} width={{ base: "85vw", lg: "65vw" }}>
        <Stack marginBottom={"5%"} width={"100%"}>
          {loaded && <ProjectGrid more={more} />}
        </Stack>
        <Button
          backgroundColor={"transparent"}
          border={"1px solid goldenrod"}
          color={"goldenrod"}
          cursor={"pointer"}
          filter={goldShadow}
          fontFamily={"var(--chakra-fonts-mono)"}
          onClick={() => setMore(!more)}
          padding={7}
          _focus={{ boxShadow: "none" }}
          _hover={{ backgroundColor: "goldenrod", color: "inherit" }}>
          {more ? "Show Less" : "Show More"}
        </Button>
        <GitCalendar />
      </Stack>
      <Flex />
    </HeroShell>
  );
};
