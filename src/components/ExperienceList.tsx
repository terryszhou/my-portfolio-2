import { Divider, Text, Heading, List, ListItem, ListIcon, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

import { BiRightArrow } from "react-icons/bi";

interface ExperienceListProps {
  rotation: any,
};

export const ExperienceList = ({ rotation }: ExperienceListProps) => {
  const [idx, setIdx] = React.useState<undefined | number>();

  React.useEffect(() => {
    switch(rotation) {
      case 330:
        setIdx(1);
        break;
      case 30:
        setIdx(2);
        break;
      case 90:
        setIdx(3);
        break;
      case 150:
        setIdx(4);
        break;
      case 210:
        setIdx(5);
        break;
      case 270:
        setIdx(6);
        break;
      default:
        setIdx(0);
    };
  }, [rotation]);

  const listArray = [
    {
      title: "Try selecting a hexagon!",
      itemOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      itemTwo: "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
      itemThree: "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
      skillSet: "Test",
      links: "Test"
    },
    {
      title: "Hipdemo",
      itemOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      itemTwo: "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
      itemThree: "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
      skillSet: "Next, Vercel, Firebase, VideoJS,",
      links: "Github Repo"
    },
    {
      title: "Restoic",
      itemOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      itemTwo: "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
      itemThree: "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
      skillSet: "React Native, XCode, Android Studio",
      links: "App Store | Google Play Store"
    },
    {
      title: "Python of Life",
      itemOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      itemTwo: "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
      itemThree: "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
      skillSet: "Python, Pygame",
      links: "Github Repo"
    },
    {
      title: "Pixel Runner",
      itemOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      itemTwo: "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
      itemThree: "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
      skillSet: "Python, Pygame",
      links: "Github Repo"
    },
    {
      title: "PokéMap",
      itemOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      itemTwo: "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
      itemThree: "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
      skillSet: "Express, React, Axios, SQL",
      links: "Live Site | Github Repo"
    },
    {
      title: "Cat Crawler",
      itemOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      itemTwo: "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
      itemThree: "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
      skillSet: "Canvas, JavaScript, CSS",
      links: "Live Site | Github Repo"
    },
  ]

  return (
    <Text>
      <Heading
        fontFamily={"var(--chakra-fonts-mono)"}
        fontSize={"xl"}
        marginBottom={2}
        textAlign={"center"}>
        {listArray[idx]?.title}
      </Heading>
      <List fontFamily={"var(--chakra-fonts-nunito)"} fontSize={"sm"} spacing={3}>
        <ListItem>
          <ListIcon as={BiRightArrow} color='green.500' />
          {listArray[idx]?.itemOne}
        </ListItem>
        <ListItem>
          <ListIcon as={BiRightArrow} color='green.500' />
          {listArray[idx]?.itemTwo}
        </ListItem>
        <ListItem>
          <ListIcon as={BiRightArrow} color='green.500' />
          {listArray[idx]?.itemThree}
        </ListItem>
      </List>
      <Divider borderColor={useColorModeValue("black", "white")} marginY={4} />
      <Text
        fontFamily={"var(--chakra-fonts-nunito)"}
        fontSize={"sm"}
        textAlign={"center"}>
        {listArray[idx]?.skillSet}
      </Text>
      <Divider borderColor={useColorModeValue("black", "white")} marginY={4} />
      <Text
        color={"goldenrod"}
        fontFamily={"var(--chakra-fonts-nunito)"}
        fontSize={"sm"}
        textAlign={"center"}>
        {listArray[idx]?.links}
      </Text>
    </Text>
  );
};