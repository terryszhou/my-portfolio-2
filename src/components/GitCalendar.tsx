import { Heading, Stack, useColorModeValue as uCMV } from "@chakra-ui/react";
import * as React from "react";

import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from "react-tooltip";

export const GitCalendar = () => (
  <Stack>
    <Heading
      fontFamily={"var(--chakra-fonts-mono)"}
      fontSize={"lg"}
      marginBottom={5}>
      My GitHub History
    </Heading>
    <GitHubCalendar
      blockRadius={7}
      color={"goldenrod"}
      theme={{
        level0: uCMV("rgb(200,200,200)","rgb(44,44,44)"),
        level1: 'rgb(107,91,47)',
        level2: 'rgb(137,115,31)',
        level3: 'rgb(166,135,56)',
        level4: 'goldenrod' }}
      username="terryszhou">
      <ReactTooltip html />
    </GitHubCalendar>
  </Stack>
);
