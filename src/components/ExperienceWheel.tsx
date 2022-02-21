import { Icon, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

import { BiUpArrow } from "react-icons/bi";

import { Hexagon } from "./Hexagon";

interface ExperienceWheelProps {
  visible: boolean | React.Dispatch<any> | React.MutableRefObject<any>,
  rotation: number,
  setRotation: React.Dispatch<React.SetStateAction<number>>,
};

export const ExperienceWheel = ({ visible, rotation, setRotation }: ExperienceWheelProps) => {
  const hexShadow: string = useColorModeValue("none", "drop-shadow(0 0 5px goldenrod)");
  const wheelHexArray = [
    {
      color: "linear-gradient(rgb(130,104,235), rgb(237,128,93) 90%)",
      currentRotation: 330,
      left: "-14.7%",
      top: "-25%",
    },
    {
      color: "linear-gradient(rgb(230,60,42), rgb(170,170,170) 90%)",
      currentRotation: 30,
      left: "14.7%",
      top: "-25%",
    },
    {
      color: "linear-gradient(rgb(108,37,152), rgb(189,54,54))",
      currentRotation: 90,
      left: "29.4%",
      top: "0.5%",
    },
    {
      color: "linear-gradient(rgb(193,98,204), rgb(142,232,232))",
      currentRotation: 150,
      left: "14.7%",
      top: "26%",
    },
    {
      color: "linear-gradient(rgb(61,75,130), rgb(103, 194, 78))",
      currentRotation: 210,
      left: "-14.7%",
      top: "26%",
    },
    {
      color: "linear-gradient(rgb(99,40,52), rgb(204, 124, 39))",
      currentRotation: 270,
      left: "-29.4%",
      top: "0.5%",
    },
  ];

  const allHexes = wheelHexArray.map(e => {
    return (
      <WheelHex
        color={e.color}
        currentRotation={e.currentRotation}
        hexShadow={hexShadow}
        left={e.left}
        rotation={rotation}
        setRotation={setRotation}
        top={e.top}
        visible={visible} />
    );
  });

  return (
    <React.Fragment>
      <Hexagon
        color={"transparent"}
        top={visible ? "0.5%" : 0}
        transform={`rotate(${rotation}deg)`}
        transitionDelay={"80ms"}
        width={170}>
        <Icon
          as={BiUpArrow}
          boxSize={45}
          color={"goldenrod"} 
          filter={hexShadow}
          marginBottom={120} />
      </Hexagon>
      {allHexes}
    </React.Fragment>
  );
};

interface WheelHexProps {
  visible: boolean | React.Dispatch<any> | React.MutableRefObject<any>,
  rotation: number,
  currentRotation: number,
  setRotation: React.Dispatch<React.SetStateAction<number>>,
  hexShadow: string,
  top?: string,
  left?: string,
  color: string,
};

export const WheelHex = ({
  color,
  currentRotation,
  hexShadow,
  left,
  rotation,
  setRotation,
  top,
  visible,
}: WheelHexProps) => {
  const hexColorInner: string = useColorModeValue('white', 'rgb(27,32,43)');
  const hexColorOuter: string = useColorModeValue('black', 'white');

  return (
    <Hexagon
      color={rotation === currentRotation ? "goldenrod" : hexColorOuter}
      filter={rotation === currentRotation && hexShadow}
      left={visible ? left : 0}
      top={visible ? top : 0}
      width={170}>
      <Hexagon
        color={rotation === currentRotation ? color : hexColorInner}
        onMouseOver={() => setRotation(currentRotation)}
        width={165}/>
    </Hexagon>
  );
};
