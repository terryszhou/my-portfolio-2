import { Flex, Stack } from "@chakra-ui/react";
import * as React from "react";

import { HeroShell } from "./HeroShell";
import { PageProps } from "../helpers/interfaces";
import { ProjectGrid } from "./ProjectGrid";

export const OldProjects = ({ pageRefs, visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible]);

  return (
    <HeroShell
      label={"04. Other Projects"}
      loaded={loaded}
      pageRefs={pageRefs}
      refNum={4}
      visible={visible}>
      <Stack ref={visRef} width={"100%"}>
        {loaded && <ProjectGrid />}
      </Stack>
      <Flex />
    </HeroShell>
  );
};
