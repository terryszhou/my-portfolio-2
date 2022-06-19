import {
    Box,
    Button,
    HStack,
    Image,
    Text,
    useColorModeValue as colorMode,
    useMediaQuery,
    VStack,
} from "@chakra-ui/react";
import * as React from "react";

import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { GoldSpan } from "./ColorSpan";
import { fadeDown } from "../helpers/animations";
import { decapitalize } from "../helpers/functions";
import { PageProps } from "../helpers/interfaces";
import { useAnim } from "../hooks";
import { NavMenuIcon } from "./NavMenuIcon";

export const Nav = ({ pageRefs, scrollDir, y }: PageProps) => {
    const fadeDownAnim: string = useAnim(`${fadeDown} 500ms`);
    const [isLargeScreen]: boolean[] = useMediaQuery("(min-width: 1050px)");
    const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
    const [stopScroll, setStopScroll] = React.useState<string>();

    React.useEffect((): void => {
        setStopScroll(
            document.body.style.overflow = menuOpen
                ? "hidden"
                : "initial"
        );
    }, [menuOpen]);

    React.useEffect((): void => {
        isLargeScreen && setMenuOpen(false)
    }, [isLargeScreen]);

    const scrollIntoView = (type: string): void => {
        pageRefs.current[type].scrollIntoView({ behavior: "smooth" });
        menuOpen && setMenuOpen(!menuOpen);
    };

    return (
        <React.Fragment>
            <HStack
                align={"center"}
                bgColor={
                    menuOpen
                        ? "transparent"
                        // : colorMode("rgba(230,230,230,.85)","rgba(27,32,43,.85)") }
                        : colorMode("rgba(230,230,230,.85)","rgba(28,28,28,.85)") }
                boxShadow={
                    menuOpen
                        ? "none"
                        : y !== 0 && scrollDir === "up" 
                            ? "dark-lg" 
                            : "none" }
                height={y !== 0 && scrollDir === "up" ? 65 : 100}
                justify={"center"}
                position={"fixed"}
                top={y > 80 && scrollDir === "down" ? -110 : 0}
                transition={"200ms ease-out"}
                width={"100%"}
                zIndex={3}>
                <HStack
                    animation={fadeDownAnim}
                    left={isLargeScreen ? 10 : 5}
                    position={"absolute"}
                    transition={"200ms ease-out"}>
                    <Image
                        marginRight={y !== 0 && scrollDir === "up" ? "-1px" : "6px"}
                        padding={y !== 0 && scrollDir === "up" ? 4 : 2}
                        src={"/face-card.png"}
                        transition={"200ms ease-out"}
                        width={20}
                        _hover={{
                            cursor: "pointer",
                            transform: "scale(1.15)" }} />
                    <ColorModeSwitcher />
                </HStack>
                <HStack
                    align={"center"}
                    fontSize={13}
                    justify={"center"}
                    paddingX={5}
                    position={"absolute"}
                    right={isLargeScreen ? 5 : 0}
                    spacing={7}
                    transition={"200ms ease-out"}>
                    {isLargeScreen
                        ? <NavButtons scrollIntoView={scrollIntoView} />
                        : <NavMenuIcon menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> }
                </HStack>
            </HStack>
            {!isLargeScreen && (
                <React.Fragment>
                    <VStack
                        // backgroundColor={colorMode("rgba(230,230,230,.85)","rgba(27,32,43,.85)")}
                        backgroundColor={colorMode("rgba(230,230,230,.85)","rgba(28,28,28,.85)")}
                        boxShadow={"dark-lg"}
                        fontSize={16}
                        height={"100%"}
                        justifyContent={"center"}
                        position={"fixed"}
                        right={menuOpen ? 0 : "-50%"}
                        spacing={10}
                        transition={"300ms ease-in-out"}
                        width={"50%"}
                        zIndex={2}>
                        <NavButtons scrollIntoView={scrollIntoView} />
                    </VStack>
                    <Box
                        backgroundColor={"black"}
                        height={"100%"}
                        onClick={() => setMenuOpen(!menuOpen)}
                        opacity={menuOpen ? .75 : 0}
                        position={"fixed"}
                        transition={"opacity 400ms ease-out, visibility 400ms ease-out"}
                        visibility={menuOpen ? "visible" : "hidden"}
                        width={"100%"}
                        zIndex={1} />
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

interface NavButtonProps {
    delay: string,
    isLargeScreen?: boolean,
    label: string,
    scroll: (arg0: string) => void,
};

export const NavButton = ({ delay, label, scroll }: NavButtonProps) => {
    const fadeDownAnim: string = useAnim(`${fadeDown} 250ms ${delay} forwards`);

    return (
        <Text
            animation={fadeDownAnim}
            cursor={"pointer"}
            fontFamily={"var(--chakra-fonts-mono)"}
            opacity={0}
            onClick={() => scroll(decapitalize(label.split(" ")[1]))}
            padding={0}
            position={"relative"}
            transition={"100ms ease-out"}
            _before={{
                backgroundColor: colorMode("rgb(190,147,45)", "goldenrod"),
                borderRadius: "2px",
                bottom: -1,
                content: `""`,
                height: "2px",
                position: "absolute",
                transition: "100ms ease-out",
                width: 0 }}
            _hover={{
                color: colorMode("rgb(190,147,45)", "goldenrod"),
                _before: { width: "105%" } }}>
            <GoldSpan>{label.split(" ")[0]} </GoldSpan>
            {label.split(" ")[1]} {label.split(" ")[2]}
        </Text>
    );
};

interface NavButtonsProps {
    isLargeScreen?: boolean,
    scrollIntoView: (arg0: string) => void,
};

export const NavButtons = ({ scrollIntoView }: NavButtonsProps) => (
    <React.Fragment>
        <NavButton label="00. Home" scroll={scrollIntoView} delay={"0ms"} />
        <NavButton label="01. About" scroll={scrollIntoView} delay={"60ms"} />
        <NavButton label="02. Experience" scroll={scrollIntoView} delay={"120ms"} />
        <NavButton label="03. Projects" scroll={scrollIntoView} delay={"180ms"} />
        <NavButton label="04. Contact" scroll={scrollIntoView} delay={"240ms"} />
        <ResumeButton />
    </React.Fragment>
);

export const ResumeButton = () => {
    const fadeDownAnim: string = useAnim(`${fadeDown} 200ms 300ms forwards`);

    return (
        <Button
            animation={fadeDownAnim}
            as={"a"}
            backgroundColor={"transparent"}
            border={"1px solid"}
            borderColor={colorMode("rgb(190,147,45)", "goldenrod")}
            color={colorMode("rgb(190,147,45)", "goldenrod")}
            cursor={"pointer"}
            fontFamily={"var(--chakra-fonts-mono)"}
            fontSize={13}
            href={"https://s3.us-west-1.amazonaws.com/terryszhou.com/terryzhou-resume.pdf"}
            opacity={0}
            target={"_blank"}
            _focus={{ boxShadow: "none" }}
            _hover={{
                backgroundColor: colorMode("rgb(190,147,45)", "goldenrod"),
                color: "inherit" }}>
            Resume
        </Button>
    );
};
