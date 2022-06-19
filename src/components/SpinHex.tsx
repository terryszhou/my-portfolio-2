import { useColorModeValue as colorMode } from "@chakra-ui/react";
import * as React from "react";

export const SpinHex = () => (
    <div className={`hex-box-main`}>
        <a
            className="hex-link"
            href="https://github.com/terryszhou/my-portfolio-2"
            target="_blank"
            rel="noreferrer">
            <div id="hex-ring-lg" style={{ filter: colorMode("none", "") }} />
            <div
                id="hex-greyspace-lg"
                style={{ backgroundColor: colorMode("rgb(230,230,230)", "rgb(28,28,28)") }} />
            <div id="hex-gold">
                <div id="hex-gold-outside" />
                <div id="hex-gold-outside-2" />
                <div id="hex-gold-corner" />
                <div id="hex-gold-corner-2" />
                <div id="hex-goldenrod" style={{ filter: colorMode("none", "") }}>
                <div id="hex-ring-sm">
                    <div
                        id="hex-greyspace-sm"
                        style={{ backgroundColor: colorMode("rgb(230,230,230)", "rgb(28,28,28)") }}>
                    </div>
                    <div id="hex-smallest" />
                </div>
                </div>
            </div>
        </a>
    </div>
);
