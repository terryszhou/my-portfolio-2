import { Grid } from "@chakra-ui/react";
import * as React from "react";

import { oldProjectList, oldProjectListProps } from "../data/oldProjectData";
import { ProjectGridItem } from "./ProjectGridItem";

interface ProjectGridProps {
  more: boolean,
};

export const ProjectGrid = ({ more }: ProjectGridProps) => {
  const selectedProjectList: oldProjectListProps[] = more
    ? oldProjectList
    : oldProjectList.slice(0,6);

  return (
    <Grid gap={4} templateColumns={"repeat(auto-fill, minmax(270px, 1fr))"}>
      {selectedProjectList.map((e, i) => (
        <ProjectGridItem
          delay={more ? 200 * (i - 6) : 200 * i + 250}
          key={i}
          title={e.title}
          details={e.details}
          links={e.links}
          skills={e.skills} /> ))}
    </Grid>
  );
};
