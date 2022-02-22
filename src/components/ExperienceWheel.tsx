import { Icon, Image, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

import { BiUpArrow, BiRun } from "react-icons/bi";
import { GiWingfoot, GiConwayLifeGlider, GiVideoConference } from "react-icons/gi";
import { CgPokemon } from "react-icons/cg";
import { FaCat } from "react-icons/fa";


import { Hexagon } from "./Hexagon";

interface ExperienceWheelProps {
  visible: boolean | React.Dispatch<boolean> | React.MutableRefObject<boolean>,
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
      icon: GiVideoConference,
    },
    {
      color: "linear-gradient(rgb(230,60,42), rgb(170,170,170) 90%)",
      currentRotation: 30,
      left: "14.7%",
      top: "-25%",
      icon: GiWingfoot,
      image: "/restoic-app.png",
    },
    {
      color: "linear-gradient(rgb(108,37,152), rgb(189,54,54))",
      currentRotation: 90,
      left: "29.4%",
      top: "0.5%",
      icon: GiConwayLifeGlider,
      image: "/game-of-life-desktop.png",
    },
    {
      color: "linear-gradient(rgb(193,98,204), rgb(142,232,232))",
      currentRotation: 150,
      left: "14.7%",
      top: "26%",
      icon: BiRun,
      image: "/pixel-runner-desktop.png",
    },
    {
      color: "linear-gradient(rgb(61,75,130), rgb(103, 194, 78))",
      currentRotation: 210,
      left: "-14.7%",
      top: "26%",
      icon: CgPokemon,
      image: "/pokemap-desktop.png",
    },
    {
      color: "linear-gradient(rgb(99,40,52), rgb(204, 124, 39))",
      currentRotation: 270,
      left: "-29.4%",
      top: "0.5%",
      icon: FaCat,
      image: "/cat-crawler-desktop.png",
    },
  ];

  const wheelHexMap = wheelHexArray.map(e => (
    <WheelHex
      color={e.color}
      currentRotation={e.currentRotation}
      hexShadow={hexShadow}
      left={e.left}
      rotation={rotation}
      setRotation={setRotation}
      top={e.top}
      icon={e.icon}
      image={e.image}
      visible={visible} />
  ));

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
      {wheelHexMap}
    </React.Fragment>
  );
};

interface WheelHexProps {
  visible: boolean | React.Dispatch<any> | React.MutableRefObject<any>,
  rotation: number,
  currentRotation: number,
  setRotation: React.Dispatch<React.SetStateAction<number>>,
  hexShadow: string,
  top: string,
  left: string,
  color: string,
  icon?: any,
  image?: any,
};

export const WheelHex = ({
  color,
  currentRotation,
  hexShadow,
  left,
  rotation,
  setRotation,
  top,
  image,
  visible,
  icon,
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
        width={165}>
        <React.Fragment>
          <Icon
            as={icon}
            boxSize={12}
            opacity={rotation === currentRotation ? 0 : 1}
            transition={"200ms ease-out"} />
          <Image
            opacity={rotation === currentRotation ? 1 : 0}
            position={"absolute"}
            src={image}
            transition={"200ms ease-out"}
            transform={String(image).includes("app") ? "scale(1.25)" : "scale(3)"} />
        </React.Fragment>
      </Hexagon>
    </Hexagon>
  );
};
