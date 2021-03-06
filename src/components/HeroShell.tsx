import {
    Box,
    Container,
    Flex,
    Heading,
    HStack,
    Stack,
    Text,
} from '@chakra-ui/react';
import * as React from "react";

import { useAnim } from "../hooks/useAnim";
import { growRight, growRightLittle } from "../helpers/animations";

interface HeroShellProps {
    children: JSX.Element | JSX.Element[],
    label?: string,
    loaded?: boolean | React.Dispatch<any> | React.MutableRefObject<any>,
    pageRefs?: React.MutableRefObject<{}>,
    refNum?: number,
};

export const HeroShell = ({
    children,
    label,
    loaded,
    pageRefs,
    refNum,
}: HeroShellProps) => {
    const number: string = label.split(".")[0] + "."
    const title: string = " " + label.split(".")[1]
    const growRightAnim: string = useAnim(`${growRight} 1s 250ms forwards`);
    const growRightLittleAnim: string = useAnim(`${growRightLittle} 1s 250ms forwards`);

    const findScroll = (el: HTMLDivElement, refNum: number): {} => {
        let testVar: {} = {};
        switch (refNum) {
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
            maxW={{ base: "95%", sm: "85%", lg: "85%", xl: "70%" }}
            opacity={loaded ? 1 : 0}
            ref={el => pageRefs.current = findScroll(el, refNum)}
            transition={"500ms ease-out"}>
            <Stack
                align={'center'}
                direction={{ base: 'column', md: 'row' }}
                paddingY={18}
                paddingTop={"7.5%"}
                spacing={{ base: 8, md: 10 }}>
                <Stack flex={2} spacing={{ base: 5, md: 10 }} position={"relative"}>
                    <Stack position={"relative"} spacing={3}>
                        <HStack>
                            <Box 
                                animation={loaded && growRightAnim}
                                backgroundColor={"goldenrod"}
                                height={1}
                                opacity={0}
                                position={"relative"}
                                top={"2%"}
                                width={0}
                                _after={{
                                    borderRight: "4px solid transparent",
                                    borderTop: "4px solid goldenrod",
                                    content: `""`,
                                    position: "absolute",
                                    right: -1,
                                    width: 0 }} />
                            <Box 
                                animation={loaded && growRightLittleAnim}
                                backgroundColor={"rgb(167,93,27)"}
                                height={1}
                                opacity={0}
                                position={"relative"}
                                top={"2%"}
                                width={0}
                                _before={{
                                    borderLeft: "4px solid transparent",
                                    borderBottom: "4px solid rgb(167,93,27)",
                                    content: `""`,
                                    position: "absolute",
                                    left: -1,
                                    width: 0 }}
                                _after={{
                                    borderRight: "4px solid transparent",
                                    borderTop: "4px solid rgb(167,93,27)",
                                    content: `""`,
                                    position: "absolute",
                                    right: -1,
                                    width: 0 }} />
                        </HStack>
                        <Heading
                            fontFamily={"var(--chakra-fonts-mono)"}
                            fontSize={{ base: 'lg', sm: 'xl', md: "2xl" }}
                            fontWeight={"bold"}>
                            <Text 
                            as={"span"}
                            color={"goldenrod"}
                            fontSize={{ base: 'md', sm: 'lg', md: "xl" }}>
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
                        width={'full'}>
                        {children[0]}
                    </Flex>
                </Stack>
                <Flex
                    align={'center'}
                    flex={0}
                    justify={'center'}
                    position={'relative'}
                    width={'full'}>
                    {children[1]}
                </Flex>
            </Stack>
        </Container>
    );
};
