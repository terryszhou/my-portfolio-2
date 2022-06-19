import { Text, useColorModeValue as colorMode } from "@chakra-ui/react";
import * as React from "react";

interface ColorSpanProps {
    children: any,
};

export const GoldSpan = ({ children }: ColorSpanProps) => (
    <Text
        as={"span"}
        color={"goldenrod"}>
        {children}
    </Text>
);

export const GreenSpan = ({ children }: ColorSpanProps) => (
    <Text
        as={"span"}
        color={colorMode("rgb(64,124,104)", "green.500")}>
        {children}
    </Text>
);

export const RedSpan = ({ children }: ColorSpanProps) => (
    <Text
        as={"span"}
        color={"red"}>
        {children}
    </Text>
);

export const PurpleSpan = ({ children }: ColorSpanProps) => (
    <Text
        as={"span"}
        color={"purple.500"}>
        {children}
    </Text>
);
