import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from "react";

interface HeroShellProps {
  children: JSX.Element | JSX.Element[],
  label: string,
  pageRefs: React.MutableRefObject<{}>,
  refNum: number,
  visible: boolean | React.Dispatch<any> | React.MutableRefObject<any>,
};

export const HeroShell = ({ children, label, pageRefs, refNum, visible }: HeroShellProps) => {
  const number: string = label.split(".")[0] + "."
  const title: string = " " + label.split(".")[1]

  const findScroll = (el: HTMLDivElement, refNum: number): {} => {
    let testVar: {} = {};
    switch (refNum){
      case 1:
        testVar = { ...pageRefs.current, home: el };
        break;
      case 2:
        testVar = { ...pageRefs.current, about: el };
        break;
      case 3:
        testVar = { ...pageRefs.current, experience: el };
        break;
      case 4:
        testVar = { ...pageRefs.current, projects: el };
        break;
      case 5:
        testVar = { ...pageRefs.current, contact: el };
        break;
      default:
        console.log("Nav");
    };
    return testVar
  };

  return (
    <Container
      maxW={{ base: "100%", lg: "80%" }}
      // minH={'100vh'}
      opacity={visible ? 1 : .25}
      ref={el => pageRefs.current = findScroll(el, refNum)}
      transition={"500ms ease-out"}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={18}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            fontFamily={"var(--chakra-fonts-mono)"}
            fontSize={{ base: 'xl', sm: '2xl', md: "4xl" }}
            fontWeight={"bold"}>
            <Text 
              as={"span"}
              color={"goldenrod"}
              textShadow={useColorModeValue("none", "0 0 5px goldenrod")}>
              {number}
            </Text>{title}
          </Heading>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            bottom={3}
            position={'relative'}
            w={'full'}>
            {children[0]}
          </Flex>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          {children[1]}
        </Flex>
      </Stack>
    </Container>
  );
};
