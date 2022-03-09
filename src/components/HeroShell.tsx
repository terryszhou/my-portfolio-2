import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as uCMV, 
} from '@chakra-ui/react';
import * as React from "react";

import { growRight } from "../helpers/animations";

interface HeroShellProps {
  children: JSX.Element | JSX.Element[],
  label?: string,
  pageRefs?: React.MutableRefObject<{}>,
  refNum?: number,
  visible?: boolean | React.Dispatch<any> | React.MutableRefObject<any>,
};

export const HeroShell = ({ children, label, pageRefs, refNum, visible }: HeroShellProps) => {
  const number: string = label.split(".")[0] + "."
  const title: string = " " + label.split(".")[1]
  const growRightAnim: string = `${growRight} 1s 250ms forwards`;

  const findScroll = (el: HTMLDivElement, refNum: number): {} => {
    let testVar: {} = {};
    switch (refNum){
      case 0:
        testVar = { ...pageRefs.current, home: el };
        break;
      case 1:
        testVar = { ...pageRefs.current, about: el };
        break;
      case 2:
        testVar = { ...pageRefs.current, experience: el };
        break;
      case 3:
        testVar = { ...pageRefs.current, projects: el };
        break;
      case 4:
        testVar = { ...pageRefs.current, contact: el };
        break;
      default:
        console.log("Nav");
    };
    return testVar
  };

  return (
    <Container
      maxW={{ base: "95%", sm: "85%", lg: "80%", xl: "70%" }}
      opacity={visible ? 1 : .25}
      ref={el => pageRefs.current = findScroll(el, refNum)}
      transition={"500ms ease-out"}>
      <Stack
        align={'center'}
        direction={{ base: 'column', md: 'row' }}
        paddingY={18}
        paddingTop={"7.5%"}
        spacing={{ base: 8, md: 10 }}>
        <Stack flex={2} spacing={{ base: 5, md: 10 }} position={"relative"}>
          <Stack position={"relative"}>
            <Box 
              animation={growRightAnim}
              backgroundColor={"goldenrod"}
              boxShadow={uCMV("none","0 0 5px goldenrod")}
              height={2}
              position={"absolute"}
              top={"2%"}
              width={"32vw"}
              _after={{
                borderTop: "8px solid goldenrod",
                borderRight: "8px solid transparent",
                content: `""`,
                filter: uCMV("none","drop-shadow(2px 0 5px goldenrod)"),
                position: "absolute",
                right: -2,
                width: 0 }} />
              <Heading
                fontFamily={"var(--chakra-fonts-mono)"}
                fontSize={{ base: 'xl', sm: '2xl', md: "3xl" }}
                fontWeight={"bold"}>
                <Text 
                  as={"span"}
                  color={"goldenrod"}
                  fontSize={{ base: 'lg', sm: 'xl', md: "2xl" }}
                  textShadow={uCMV("none","0 0 5px goldenrod")}>
                  {number}
                </Text>{title}
              </Heading>
          </Stack>
          <Flex
            align={'center'}
            bottom={3}
            flex={1}
            justify={'center'}
            position={'relative'}
            w={'full'}>
            {children[0]}
          </Flex>
        </Stack>
        <Flex
          align={'center'}
          flex={0}
          justify={'center'}
          position={'relative'}
          w={'full'}>
          {children[1]}
        </Flex>
      </Stack>
    </Container>
  );
};
