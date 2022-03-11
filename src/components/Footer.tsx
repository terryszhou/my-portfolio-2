import { Stack, Text, Image } from "@chakra-ui/react";
import * as React from "react";

import { GoldSpan } from "./ColorSpan";
import { coinJump } from "../helpers/animations";

export const Footer = () => {
  // const coin = new Audio("/smw_coin.wav");
  const coinAudio: HTMLAudioElement = new Audio("https://themushroomkingdom.net/sounds/wav/smw/smw_coin.wav");
  coinAudio.load();
  const coinJumpAnim: string = `${coinJump} 200ms ease-in-out`;
  const [jump, setJump] = React.useState<boolean>(false);

  return (
    <Stack align={"center"} bottom={5} position={"absolute"}>
      <Image
        alt={"face-icon"}
        animation={jump && coinJumpAnim}
        boxSize={10}
        cursor={"pointer"}
        onClick={() => { coinAudio.play(); setJump(true); }}
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
        <GoldSpan>Designed & Built by Terry S. Zhou</GoldSpan>
      </Text>
    </Stack>
  );
};
