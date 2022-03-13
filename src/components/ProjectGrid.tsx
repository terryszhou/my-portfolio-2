import { Box, Grid, GridItem, Heading, HStack, List, ListIcon, ListItem, useColorModeValue as uCMV, VStack } from "@chakra-ui/react";
import * as React from "react";

import { BsXDiamondFill } from "react-icons/bs";

import { oldProjectList, oldProjectListProps } from "../data/oldProjectData";
import { fadeDown } from "../helpers/animations";
import { SkillIcon } from "./SkillTable";
import { SocialIcon } from "./Social";

export const ProjectGrid = () => {
  return (
    <Grid gap={4} templateColumns={"repeat(auto-fill, minmax(270px, 1fr))"}>
      {oldProjectList.map((e, i) => (
        <ProjectGridItem
          delay={250 + i * 200}
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

interface GridAnimationProps {
  delay: number,
};

export const ProjectGridItem = ({ delay, title, details, skills, links }: oldProjectListProps & GridAnimationProps) => {
  const greenShadow: string = uCMV("none","drop-shadow(0 0 5px green)");
  return (
    <Box
      animation={`${fadeDown} 250ms ${delay}ms forwards`}
      as={"a"}
      href={links[0].href}
      opacity={0}
      rel={"noreferrer"}
      target={"_blank"}>
      <GridItem
        backgroundColor={uCMV("white","rgb(47,55,71)")}
        borderRadius={5}
        boxShadow={"0 25px 20px -20px black"}
        cursor={"pointer"}
        height={300}
        position={"relative"}
        role={"group"}
        transition={"100ms ease-in-out"}
        _before={{
          backgroundColor: "goldenrod",
          borderTopLeftRadius: 5,
          clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)",
          content: `""`,
          height: 5,
          left: 0,
          position: "absolute",
          top: 0,
          width: 5 }}
        _hover={{
          transform: "scale(1.02)",
          transitionDuration: "100ms" }}>
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
          <List marginY={5}>
            {details.map((detail, i) => (
              <ListItem
                color={uCMV("rgba(44,44,44,0.8)","rgba(180,180,180,0.8)")}
                display={"flex"}
                fontFamily={"var(--chakra-fonts-nunito)"}
                fontSize={"sm"}
                key={i}
                marginY={2}>
                <ListIcon
                  as={BsXDiamondFill}
                  color='green.500'
                  filter={greenShadow} 
                  marginTop={1} />
                {detail}
              </ListItem> ))}
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
    </Box>
  );
};
