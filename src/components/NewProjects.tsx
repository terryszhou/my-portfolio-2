import { Flex, Stack } from "@chakra-ui/react";
import * as React from "react";

import { newProjectList } from "../data/newProjectData";
import { PageProps } from "../helpers/interfaces";
import { HeroShell } from "./HeroShell";
import { NewProjectShell } from "./NewProjectShell";

export const NewProjects = ({ pageRefs, visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible]);

  const newProjectMap = newProjectList.map((proj, i) => (
    <NewProjectShell
      details={proj.details}
      dir={proj.dir}
      image={proj.image}
      key={i}
      links={proj.links}
      mainLink={proj.mainLink}
      skills={proj.skills}
      title={proj.title} />
  ));

  return (
    <HeroShell
      label={"03. Stuff I've Created Recently"}
      loaded={loaded}
      pageRefs={pageRefs}
      refNum={3}>
      <Stack marginY={"5%"} ref={visRef} spacing={"10%"}>
        {newProjectMap}
      </Stack>
      <Flex />
    </HeroShell>
  );
};
