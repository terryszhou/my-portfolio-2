import { Flex, Stack } from "@chakra-ui/react";
import * as React from "react";

import { HeroShell } from "./HeroShell";
import { PageProps } from "../helpers/interfaces";
import { NewProjectShell } from "./NewProjectShell";
import { featuredProjectList } from "../data/featuredProjectData";

export const NewProjects = ({ pageRefs, visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible]);

  const featuredProjectMap = featuredProjectList.map((proj, i) => (
    <NewProjectShell
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
      <Stack
        marginTop={"5%"}
        ref={visRef}>
        {featuredProjectMap}
      </Stack>
      <Flex />
    </HeroShell>
  );
};
