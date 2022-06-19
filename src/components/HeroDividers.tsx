import { Box } from "@chakra-ui/react";
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
                height={1}
                opacity={1}
                position={"absolute"}
                right={"-16.5%"}
                top={orientation === "topright" && "13%"}
                transform={orientation === "topleft" && "scaleY(-1)"}
                zIndex={1}
                _before={{
                    borderLeft: "4px solid transparent",
                    borderTop: "4px solid goldenrod",
                    content: `""`,
                    height: 0,
                    left: -1,
                    position: "absolute",
                    width: 0 }} />
            <Box 
                animation={slideRightAnim}
                backgroundColor={"goldenrod"}
                bottom={orientation === "topright" && "2%"}
                height={1}
                left={"-16.5%"}
                opacity={0}
                position={"absolute"}
                top={orientation === "topleft" && 2}
                width={"50%"}
                _after={{
                    borderBottom: orientation === "topright" && "4px solid goldenrod",
                    borderTop: orientation === "topleft" && "4px solid goldenrod",
                    borderRight: "4px solid transparent",
                    content: `""`,
                    height: 0,
                    position: "absolute",
                    right: -1,
                    width: 0 }}/>
        </React.Fragment>
    );
};
