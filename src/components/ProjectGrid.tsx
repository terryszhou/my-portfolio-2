import { Grid, GridItem, Heading, HStack, List, ListIcon, ListItem, Text, useColorModeValue as uCMV, VStack } from "@chakra-ui/react";
import * as React from "react";

import { BiRightArrow } from "react-icons/bi";
import { BsXDiamondFill } from "react-icons/bs";

import { oldProjectList, oldProjectListProps } from "../data/oldProjectData";
import { fadeDown } from "../helpers/animations";
import { SkillIcon } from "./SkillTable";
import { SocialIcon } from "./Social";

export const ProjectGrid = () => {
  return (
    <Grid gap={4} templateColumns={"repeat(auto-fill, minmax(250px, 1fr))"}>
      {oldProjectList.map((e, i) => (
        <ProjectGridItem
          key={i}
          title={e.title}
          details={e.details}
          links={e.links}
          skills={e.skills}
        />
      ))}
    </Grid>
  );
};

export const ProjectGridItem = ({ title, details, skills, links }: oldProjectListProps) => {
  const listColor2: string = uCMV("rgb(78,83,104)","gray.300");
  const fadeDownAnim: string = `${fadeDown} 250ms`;
  const fadeDownAnim2: string = `${fadeDown} 250ms 120ms forwards`;
  const fadeDownAnim3: string = `${fadeDown} 250ms 240ms forwards`;
  const fadeDownAnim4: string = `${fadeDown} 250ms 360ms forwards`;
  const goldShadow: string = uCMV("none","drop-shadow(0 0 5px goldenrod)");
  const greenShadow: string = uCMV("none","drop-shadow(0 0 5px green)");

  return (
    <GridItem
      backgroundColor={uCMV("white","rgb(47,55,71)")}
      borderRadius={5}
      boxShadow={"0 25px 20px -20px black"}
      height={300}
      position={"relative"}>
      <VStack padding={5}>
        <HStack
          display={"flex"}
          justifyContent={"flex-end"}
          marginBottom={2}
          width={"100%"}>
          {links.map((e, i) => (
            <SocialIcon
              delay={e.delay}
              href={e.href}
              icon={e.icon}
              key={i} /> ))}
        </HStack>
        <Heading fontFamily={"var(--chakra-fonts-mono)"} fontSize={"xl"}>
          {title}
        </Heading>
        <List
          animation={fadeDownAnim2}
          color={listColor2}
          marginY={5}>
          {details.map((detail, i) => (
            <ListItem
              display={"flex"}
              fontSize={"sm"}
              key={i}
              marginY={2}>
              <ListIcon
                as={BsXDiamondFill}
                color='green.500'
                filter={greenShadow}
                marginTop={1} />
              {detail}
            </ListItem>
          ))}
        </List>
        <HStack bottom={5} position={"absolute"}>
          {skills.map((skill, i) => (
            <SkillIcon
              color={skill.color}
              delay={skill.delay}
              icon={skill.icon}
              key={i}
              label={skill.label} /> ))}
        </HStack>
      </VStack>
    </GridItem>
  );
};
