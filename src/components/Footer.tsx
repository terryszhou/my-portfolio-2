import { Image, Stack, Text } from "@chakra-ui/react";
import * as React from "react";

import useSound from "use-sound";
import { ReturnedValue } from "use-sound/dist/types";

import coinAudio from "../audio/smw_coin.mp3";
import { ColorSpan } from "./ColorSpan";
import { coinJump } from "../helpers/animations";
import { useAnim } from "../hooks/useAnim";

export const Footer = () => {
    const [play]: ReturnedValue = useSound(coinAudio);
    const coinJumpAnim: string = useAnim(`${coinJump} 200ms ease-in-out`);
    const [jump, setJump] = React.useState<boolean>(false);

    return (
        <Stack align={"center"} bottom={5} position={"absolute"}>
            <Image
                alt={"face-icon"}
                animation={jump && coinJumpAnim}
                boxSize={10}
                cursor={"pointer"}
                onClick={() => { play(); setJump(true); }}
                onAnimationEnd={() => setJump(false)}
                src={"/favicon.ico"} />
            <Text
                as={"a"}
                fontFamily={"var(--chakra-fonts-mono)"}
                fontSize={12}
                href={"https://github.com/terryszhou"}
                rel={"noreferrer"}
                target={"_blank"}
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
                    _before: { width: "105%" } }}>
                <ColorSpan color={"gold"}>
                    Designed & Built by Terry S. Zhou
                </ColorSpan>
            </Text>
        </Stack>
    );
};
