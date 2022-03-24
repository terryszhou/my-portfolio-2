import { Stack, Text, Image } from "@chakra-ui/react";
import * as React from "react";

import useSound from "use-sound";

import { GoldSpan } from "./ColorSpan";
import { coinJump } from "../helpers/animations";
import { useAnim } from "../hooks/useAnim";

import coinAudio from "../audio/smw_coin.wav";

// import anime from 'animejs';

export const Footer = () => {
  const [play] = useSound(coinAudio);
  const coinJumpAnim: string = useAnim(`${coinJump} 200ms ease-in-out`);
  const [jump, setJump] = React.useState<boolean>(false);

  // const animationRef = React.useRef(null);
  // React.useEffect(() => {
  //   animationRef.current = anime({
  //     targets: ".el",
  //     translateX: 250,
  //     delay: function(el, i) {
  //       return i * 100;
  //     },
  //     loop: true,
  //     direction: "alternate",
  //     easing: "easeInOutSine"
  //   });
  // }, []);

  return (
    <Stack align={"center"} bottom={5} position={"absolute"}>
      {/* <button onClick={()=>animationRef.current.restart()}>Restart</button>
      <Box className="el" /> */}
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
        <GoldSpan>Designed & Built by Terry S. Zhou</GoldSpan>
      </Text>
    </Stack>
  );
};
