import {
    Box,
    Flex,
    Center,
    Stack,
    Text,
    Heading,
    Image,
    useColorModeValue as colorMode,
    Tooltip,
    List,
    ListItem,
    ListIcon,
} from "@chakra-ui/react";
import * as React from "react";

import { BiRightArrow } from "react-icons/bi";

import { ColorSpan } from "./ColorSpan";
import { fadeRight } from "../helpers/animations";
import { PageProps } from "../helpers/interfaces";
import { HeroDividers } from "./HeroDividers";
import { useAnim } from "../hooks/useAnim";
import { SpinHex } from "./SpinHex";

export const Home = ({ pageRefs, visRef, visible }: PageProps) => {
    const fadeRightAnim1: string | undefined = useAnim(`${fadeRight} 250ms 250ms forwards`);
    const fadeRightAnim2: string | undefined = useAnim(`${fadeRight} 250ms 400ms forwards`);
    const fadeRightAnim3: string | undefined = useAnim(`${fadeRight} 250ms 550ms forwards`);
    const fadeRightAnim4: string | undefined = useAnim(`${fadeRight} 250ms 700ms forwards`);

    const [loaded, setLoaded] = React.useState<boolean>(false);
    React.useEffect((): void => visible && setLoaded(true), [visible]);

    return (
        <Flex
            alignItems={"center"}
            boxSizing={"border-box"}
            flexDirection={{ base: "column", md: "row" }}
            height={"100vh"}
            opacity={visible ? 1 : 0.25}
            position={"relative"}
            ref={el => pageRefs.current = { ...pageRefs.current, home: el }}
            transition={"1s ease-out"}
            width={"75%"}>
            <Stack
                flexBasis={{ base: 0, md: "66%"}}
                marginTop={{ base: 40, md: 0 }}
                ref={visRef}>
                <Box>
                    <Text
                        animation={fadeRightAnim1}
                        color={colorMode("rgb(64,124,104)", "green.500")}
                        fontFamily={"var(--chakra-fonts-mono)"}
                        opacity={0}>
                        Hey y'all! My name's
                    </Text>
                    <Heading
                        alignItems={"center"}
                        animation={fadeRightAnim2}
                        display={"flex"}
                        fontFamily={"var(--chakra-fonts-mono)"}
                        fontSize={{ base: 36, sm: 48, md: 56, lg: 64 }}
                        marginY={4}
                        opacity={0}
                        width={"fit-content"}>
                        <Text as={"span"}>
                            Terry S. Zhou
                        </Text>
                        <Tooltip hasArrow label={
                            <Stack fontFamily={"var(--chakra-fonts-nunito)"}>
                                <Text>
                                    {`??????: `}
                                    <Text as={"span"} color={"red"}>
                                        ?????????
                                    </Text>
                                </Text>
                                <Text>
                                    {`P??ny??n: `}
                                    <Text as={"span"} color={"red"}>
                                        Zh??u S??j??a
                                    </Text>
                                </Text>
                                <Text>
                                    <Text as={"span"} color={"red"}>
                                        {`??? Zh??u`}
                                    </Text>
                                    : The longest-lived dynasty in Chinese history.
                                </Text>
                                <Text>
                                    <Text as={"span"} color={"red"}>
                                        {`??? S??`}
                                    </Text>
                                        : (to) think
                                </Text>
                                <Text>
                                    <Text as={"span"} color={"red"}>
                                        {`??? J??a`}
                                    </Text>
                                        : (with) excellence & beauty
                                </Text>
                            </Stack> }>
                            <Image
                                boxSize={{ base: "40px", lg: "50px" }}
                                cursor={"pointer"}
                                marginLeft={{ base: 2, lg: 4 }}
                                src={"/seal-sig.png"}
                                transition={"200ms ease-in-out"}
                                _hover={{ transform: "scale(1.1)" }} />
                        </Tooltip>
                    </Heading>
                    <Heading
                        animation={fadeRightAnim3}
                        color={colorMode("rgb(64,124,104)", "green.500")}
                        fontSize={{ base: 16, sm: 20, lg: 24 }}
                        fontFamily={"var(--chakra-fonts-mono)"}
                        marginY={4}
                        opacity={0}
                        width={"fit-content"}>
                        Data Analyst | Front-End Engineer
                    </Heading>
                    <List animation={fadeRightAnim4} opacity={0} spacing={{ base: -8, sm: -5 }}>
                        <ListItem alignItems={"center"} display={"flex"}>
                            <ListIcon
                                as={BiRightArrow}
                                color={colorMode("rgb(64,124,104)", "green.500")} />
                            <Text
                                color={colorMode("rgba(44,44,44,0.8)","rgba(180,180,180,0.8)")}
                                fontFamily={"var(--chakra-fonts-nunito)"}
                                fontSize={{ base: 14, md: 16, lg: 18 }}
                                marginY={6}>
                                I'm a
                                <ColorSpan color={"green"}> software engineer</ColorSpan> based out of Austin, TX.
                            </Text>
                        </ListItem>
                        <ListItem
                            alignItems={"center"}
                            display={"flex"}
                            width={{ base: "120%", sm: "100%", md: "80%" }}>
                            <ListIcon
                                as={BiRightArrow}
                                color={colorMode("rgb(64,124,104)", "green.500")} />
                            <Text
                                color={colorMode("rgba(44,44,44,0.8)","rgba(180,180,180,0.8)")}
                                fontFamily={"var(--chakra-fonts-nunito)"}
                                fontSize={{ base: 14, md: 16, lg: 18 }}
                                marginY={6}>
                                I like writing code that's
                                <ColorSpan color={"green"}>{` practical`}</ColorSpan>
                                {`, `}
                                <ColorSpan color={"green"}>scalable</ColorSpan>
                                {`, and `}
                                <ColorSpan color={"green"}>stylish</ColorSpan>
                            </Text>
                        </ListItem>
                        <ListItem alignItems={"center"} display={"flex"}>
                            <ListIcon as={BiRightArrow} color={colorMode("rgb(64,124,104)", "green.500")} />
                            <Text
                                color={colorMode("rgba(44,44,44,0.8)","rgba(180,180,180,0.8)")}
                                fontFamily={"var(--chakra-fonts-nunito)"}
                                fontSize={{ base: 14, md: 16, lg: 18 }}
                                marginY={6}>
                                Have an opportunity for me? Let's
                                <Text
                                    as={"a"}
                                    color={"goldenrod"}
                                    href={"mailto:terryszhou@gmail.com"}
                                    position={"relative"}
                                    _before={{
                                        backgroundColor: "goldenrod",
                                        borderRadius: "5px",
                                        bottom: -1,
                                        content: `""`,
                                        height: "2px",
                                        position: "absolute",
                                        transition: "100ms ease-out",
                                        width: 0 }}
                                    _hover={{
                                        color: "goldenrod",
                                        _before: {
                                        width: "105%" } }}>
                                    {` get in touch!`}
                                </Text>
                            </Text>
                        </ListItem>
                    </List>
                </Box>
            </Stack>
            <Center flexBasis={"33%"} marginRight={"20%"}>
                <SpinHex />
            </Center>
            {loaded && <HeroDividers orientation={"topright"} />}
        </Flex>
    );
};
