import {
  Box,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Td,
  Tooltip,
  Text,
  useColorModeValue,
  Heading,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import React from "react";

import { BiRightArrow } from "react-icons/bi";

import { HeroShell } from "./HeroShell";
import { growRight } from "../helpers/animations";
import { monArr, yearArr, expArray } from "../helpers/variables";
import { PageProps } from "../helpers/interfaces";

export const Experience = ({ pageRefs, visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible]);

  const growRightAnim: string = `${growRight} 1s 250ms forwards`;
  const monW: number = (1 / monArr.length) * 100;
  const topMargin: string = useColorModeValue("rgb(242,245,249)", "rgb(43,50,65)");
  const atCompanyColor: string = useColorModeValue("gray.400", "rgb(102,105,127)")
  const listColor: string = useColorModeValue("gray.300", "rgb(78,83,104)")

  const expMap: JSX.Element[] = expArray.map((e, i) => (
    <Tooltip
      hasArrow
      label={
        <Box fontFamily={"var(--chakra-fonts-nunito)"}>
          <Text fontWeight={"bold"}>{e.title}</Text>
          <Text as={"span"} color={atCompanyColor} fontWeight="bold"> @ {e.company}</Text>
          <Text color={listColor}>{e.dates}</Text>
          <List color={listColor}>
            {e.skills.map((skill, i) => (
              <ListItem key={i}>
                <ListIcon as={BiRightArrow} color='green.500' />
                {skill}
              </ListItem>
            ))}
          </List>
        </Box>
      }
>
      <Tr cursor={"pointer"} key={i} role={"group"}>
        <Td
          fontSize={{ base: "xs", md: "sm", lg: "md" }}
          fontWeight={"bold"}
          paddingBottom={2}
          paddingTop={2}>
          {e.company}
        </Td>
        <Td
          colSpan={monArr.length}
          paddingBottom={2}
          paddingTop={2}>
          <Box
            animation={growRightAnim}
            backgroundColor={e.color}
            borderRadius={15}
            height={2}
            left={20}
            marginLeft={`${monW * e.start}%`}
            transition={"200ms ease-out"}
            width={`${monW * e.length}%`}
            _groupHover={{
              filter: "brightness(1.5)",
              transform: "scale(1.05)",
              transitionDuration: 0.2,
            }}
          />
        </Td>
      </Tr>
    </Tooltip>
  ));

  return (
    <HeroShell
      label={"02. My Experience"}
      pageRefs={pageRefs}
      refNum={2}
      visible={visible}>
      <Stack ref={visRef}>
        <Stack
          border={"1px solid"}
          borderRadius={15}
          width={{ base: "80vw", lg: "50vw"}}
          overflow={"scroll"}>
          {loaded && (
            <Table
              fontFamily={"var(--chakra-fonts-mono)"}
              opacity={0.8}
              variant={"striped"}>
              <Thead>
                <Tr>
                  <Td
                    backgroundColor={topMargin}
                    colSpan={monArr.length + 1}
                    paddingBottom={1}
                    paddingTop={1} />
                </Tr>
              </Thead>
              <Tbody>{expMap}</Tbody>
              <Tfoot>
                <Tr>
                  <Td borderBottom={"none"} paddingBottom={2} paddingTop={2} />
                  {monArr.map((e, i) => (
                    <Td borderBottom={"none"} key={i} paddingBottom={2} paddingTop={2}>{e}</Td>
                  ))}
                </Tr>
                <Tr>
                  <Td paddingBottom={2} paddingTop={2} />
                  {yearArr.map((e, i) => (
                    <Td color={'red.500'} key={i} paddingBottom={2} paddingTop={2}>{e}</Td>
                  ))}
                </Tr>
              </Tfoot>
            </Table>
          )}
        </Stack>
        <Heading
          fontFamily={"var(--chakra-fonts-roboto)"}
          fontSize={{ base: "md", md: "xl", lg: "2xl"}}>
          <Text
            as={"span"}
            color={"goldenrod"}
            filter={useColorModeValue("none", "drop-shadow(0 0 5px goldenrod)")}
            >* </Text>
          Hover for
          <Text
            as={"span"}
            color={"goldenrod"}
            filter={useColorModeValue("none", "drop-shadow(0 0 5px goldenrod)")}
            > summary. </Text>
          Click for 
          <Text
            as={"span"}
            color={"goldenrod"}
            filter={useColorModeValue("none", "drop-shadow(0 0 5px goldenrod)")}
            > details!</Text>
        </Heading>
      </Stack>
      <Box />
    </HeroShell>
  );
};
