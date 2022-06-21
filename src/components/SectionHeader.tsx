import { Heading, HStack } from "@chakra-ui/react"
import * as React from "react";

import { ColorSpan } from "./ColorSpan";

interface SectionHeaderProps {
    label: string,
};

export const SectionHeader = ({ label }: SectionHeaderProps) => {
    const number: string = label.split(".")[0] + "."
    const title: string = " " + label.split(".")[1]

    return (
        <HStack
            position={"absolute"}
            spacing={6}
            top={8}>
            <Heading
                fontSize={{ base: "1.5rem", lg:"2rem" }}
                fontWeight={"bold"}
                fontFamily={"var(--chakra-fonts-mono)"}
                lineHeight={1}
                position={"relative"}
                width={"fit-content"}>
                <ColorSpan color={"gold"}>{number}</ColorSpan>
                {title}
            </Heading>
        </HStack>
    );
};
