import { Flex, Heading, useColorModeValue as uCMV } from "@chakra-ui/react"
import * as React from "react";

import { GoldSpan } from "./ColorSpan";

interface ExperienceHeadingProps {
  pie: boolean,
  setPie: React.Dispatch<boolean>
};

export const ExperienceHeading = ({ pie, setPie }: ExperienceHeadingProps) => {
  const goldShadow: string = uCMV("none","drop-shadow(0 0 5px goldenrod)");
  return (
    <Flex
      alignItems={"center"}
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent={"center"}>
      <Heading
        fontFamily={"var(--chakra-fonts-roboto)"}
        fontSize={{ base: "md", md: "xl", lg: "2xl"}}
        margin={5}>
        <GoldSpan>* </GoldSpan>
        Hover for
        <GoldSpan> summary. </GoldSpan>
        Click for 
        <GoldSpan> details!</GoldSpan>
      </Heading>
      {/* <Button
        backgroundColor={"transparent"}
        border={"1px solid goldenrod"}
        color={"goldenrod"}
        onClick={() => setPie(!pie)}
        cursor={"pointer"}
        filter={goldShadow}
        fontFamily={"var(--chakra-fonts-mono)"}
        fontSize={13}
        _focus={{ boxShadow: "none" }}
        _hover={{ backgroundColor: "goldenrod", color: "inherit" }}>
        Toggle Chart
      </Button> */}
    </Flex>
  );
};
