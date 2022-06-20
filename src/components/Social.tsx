import {
  Divider,
  IconButton,
  Stack,
  Text,
  useColorModeValue as colorMode
} from "@chakra-ui/react";
import * as React from "react";

import { FiMail } from "react-icons/fi";

import { socialList } from "../data/socialData";
import { fadeDown } from "../helpers/animations";
import { PageProps } from "../helpers/interfaces";
import { useAnim } from "../hooks/useAnim";

export const Social = ({ scrollDir, y }: PageProps ) => {
    const fadeDownAnim: string = useAnim(`${fadeDown} 200ms 180ms forwards`);
    return (
        <React.Fragment>
            <Stack
                alignItems={"center"}
                direction={{ base: "column-reverse", lg: "row" }}
                display={"flex"}
                justifyContent={"center"}
                position={"fixed"}
                right={{ base: 2, sm: 5, lg: 0 }}
                top={
                    y > 80 && scrollDir === "down"
                        ? "2%"
                        : y > 60 && scrollDir === "up"
                            ? "10%"
                            : "15%" }
                transition={"200ms ease-out"}
                zIndex={3}>
                {socialList.map((e, i) => (
                    <SocialIcon
                        icon={e.icon}
                        delay={e.delay}
                        key={i}
                        href={e.href} /> ))}
                <Divider
                    borderColor={colorMode("rgb(64,124,104)", "green.500")}
                    width={{ base: 0, lg: 20 }} />
            </Stack>
            <Stack
                alignItems={"center"}
                bottom={{ base: y > 80 ? "11%" : "15%", lg: y > 80 ? "2%" : "5%" }}
                direction={"row"}
                display={"flex"}
                justifyContent={"center"}
                left={{ base: -20, sm: -16, lg: 0 }}
                position={"fixed"}
                transform={{ base: "rotate(-90deg)", lg: "rotate(0deg)" }}
                transition={"200ms ease-out"}
                zIndex={1}>
                    <Divider
                        borderColor={colorMode("rgb(64,124,104)", "green.500")}
                        width={{ base: 0, lg: 16}} />
                    <SocialIcon
                        delay={"80ms"} 
                        href={"mailto:terryszhou@gmail.com"} 
                        icon={<FiMail />} />
                        <Text
                            animation={fadeDownAnim}
                            as={"a"}
                            color={colorMode("rgb(64,124,104)", "green.500")}
                            fontFamily={"var(--chakra-fonts-mono)"}
                            fontSize={{ base: "xs", lg: "sm" }}
                            href={"mailto:terryszhou@gmail.com"}
                            opacity={0}
                            rel={"noreferrer"}
                            target={"_blank"}
                            transition={"100ms ease-out"}
                            _before={{
                                backgroundColor: colorMode("rgb(64,124,104)", "green.500"),
                                borderRadius: "5px",
                                bottom: -1,
                                content: `""`,
                                height: "2px",
                                position: "absolute",
                                transition: "100ms ease-out",
                                width: 0 }}
                            _hover={{
                                color: colorMode("rgb(64,124,104)", "green.500"),
                                _before: {
                                width: "105%" } }}>
                            terryszhou@gmail.com
                        </Text>
            </Stack>
        </React.Fragment>
    );
};

interface SocialIconProps {
    delay?: string,
    href: string,
    icon: React.ReactElement,
};

export const SocialIcon = ({ delay, href, icon }: SocialIconProps) => {
    const fadeDownAnim: string = useAnim(`${fadeDown} 200ms ${delay} forwards`);

    return (
        <IconButton
        as={"a"}
        animation={fadeDownAnim}
        aria-label={"social-icon-button"}
        backgroundColor={"transparent"}
        border={"1px solid"}
        color={colorMode("rgb(64,124,104)", "green.500")}
        href={href}
        icon={icon}
        opacity={"0"}
        rel={"noreferrer"}
        size={"xs"}
        target={"_blank"}
        transition={"100ms ease-out"}
        _hover={{
            backgroundColor: colorMode("rgb(64,124,104)", "green.500"),
            border: colorMode("0px", "1px solid"),
            color: "white" }} />
    );
};
