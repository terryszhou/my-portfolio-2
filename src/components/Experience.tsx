import {
  Box,
  Stack,
  Table,
  Tbody,
  Tfoot,
  Tr,
  Td,
  Text,
} from "@chakra-ui/react";
import React from "react";

import { HeroShell } from "./HeroShell";
import { growRight } from "../helpers/animations";
import { PageProps } from "../helpers/interfaces";

interface expArrayProps {
  company: string,
  color: string,
  start: number,
  length: number
};

export const Experience = ({ isLargeScreen, pageRefs, visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible]);

  const growRightAnim: string = `${growRight} 1s 250ms forwards`;

  const monArr: string[] = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    "Jan", "Feb",
  ];

  const yearArr: string[] = [
    "2021", "", "", "", "", "", "", "", "", "", "", "", "2022", "",
  ];

  const monW: number = (1 / monArr.length) * 100;

  const expArray: expArrayProps[] = [
    {
      company: "JPAR",
      color: "rgb(33,81,146)",
      start: 0,
      length: 4,
    },
    {
      company: "General Assembly (Boot Camp)",
      color: "rgb(199,54,50)",
      start: 4,
      length: 3,
    },
    {
      company: "General Assembly (TA)",
      color: "rgb(33,81,197)",
      start: 7,
      length: 5,
    },
    {
      company: "Restoic Inc.",
      color: "rgb(214,74,49)",
      start: 8,
      length: 3,
    },
    {
      company: "Rakehealth, LLC",
      color: "rgb(252,236,108)",
      start: 10,
      length: 4,
    },
  ];

  const expMap: JSX.Element[] = expArray.map((e, i) => (
    <Tr key={i}>
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
          width={`${monW * e.length}%`} />
      </Td>
    </Tr>
  ))

  return (
    <HeroShell
      label={"02. My Experience"}
      pageRefs={pageRefs}
      refNum={2}
      visible={visible}>
        <Stack
          border={"1px solid"}
          borderRadius={15}
          width={{ base: "80vw", lg: "50vw"}}
          overflow={"scroll"}
          ref={visRef}>
          {loaded && (
            <Table
              fontFamily={"var(--chakra-fonts-mono)"}
              opacity={0.8}
              variant={"striped"}>
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
      <Box />
    </HeroShell>
  );
};
