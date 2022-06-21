import { Text, useColorModeValue as colorMode } from "@chakra-ui/react";
import * as React from "react";

interface ColorSpanProps {
    color: string,
    children: any,
    fontFamily?: string,
};

export const ColorSpan = ({ color, children, fontFamily }: ColorSpanProps) => {
    let myColor = ""
    switch (color) {
        case "gold":
            myColor = colorMode("rgb(170,127,25)", "goldenrod")
            break;
        case "green":
            myColor = colorMode("rgb(64,124,104)", "green.500")
            break;
        case "purple":
            myColor = "purple.500"
    };

    return (
        <Text
            as={"span"}
            color={myColor}
            fontFamily={fontFamily}>
            {children}
        </Text>
    );
};
