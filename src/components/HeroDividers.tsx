import { Box, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

import { slideLeft, slideRight } from "../helpers/animations";

interface HeroDividersProps {
  orientation: string,
}

export const HeroDividers = ({ orientation }: HeroDividersProps) => {
  const slideLeftAnim: string = `${slideLeft} 500ms 250ms forwards`;
  const slideRightAnim: string = `${slideRight} 500ms 250ms forwards`;

  return (
    <React.Fragment>
      <Box
        animation={slideLeftAnim}
        backgroundColor={"goldenrod"}
        bottom={orientation === "topleft" && 2}
        boxShadow={useColorModeValue("none", "0 0 5px goldenrod")}
        height={2}
        opacity={1}
        position={"absolute"}
        right={"-16.5%"}
        top={orientation === "topright" && "15%"}
        transform={orientation === "topleft" && "scaleY(-1)"}
        zIndex={1}
        _before={{
          borderLeft: "8px solid transparent",
          borderTop: "8px solid goldenrod",
          content: `""`,
          filter: useColorModeValue("none", "drop-shadow(-2px 0 5px goldenrod)"),
          height: 0,
          left: -2,
          position: "absolute",
          width: 0,
        }} />
      <Box 
        animation={slideRightAnim}
        backgroundColor={"goldenrod"}
        bottom={orientation === "topright" && "2%"}
        boxShadow={useColorModeValue("none", "0 0 5px goldenrod")}
        height={2}
        left={"-16.5%"}
        opacity={0}
        position={"absolute"}
        top={orientation === "topleft" && 2}
        width={"50%"}
        _after={{
          borderBottom: orientation === "topright" && "8px solid goldenrod",
          borderTop: orientation === "topleft" && "8px solid goldenrod",
          borderRight: "8px solid transparent",
          content: `""`,
          filter: useColorModeValue("none", "drop-shadow(2px 0 5px goldenrod)"),
          height: 0,
          position: "absolute",
          right: -2,
          width: 0,
        }}/>
    </React.Fragment>
  );
};