import { Button, Flex, Image, Heading, Stack, VStack, useColorModeValue as colorMode } from "@chakra-ui/react";
import * as React from "react";

import { GitCalendar } from "./GitCalendar";
import { GoldSpan } from "./ColorSpan";
import { newProjectList } from "../data/newProjectData";
import { PageProps } from "../helpers/interfaces";
import { HeroShell } from "./HeroShell";
import { NewProjectShell } from "./NewProjectShell";
import { ProjectGrid } from "./ProjectGrid";

export const Projects = ({ pageRefs, visible, visRef }: PageProps) => {
    const [loaded, setLoaded] = React.useState<boolean>(false);
    React.useEffect((): void => visible && setLoaded(true), [visible]);

    const [more, setMore] = React.useState<boolean>(false);

    const newProjectMap = newProjectList.map((proj, i) => (
        <NewProjectShell
            details={proj.details}
            dir={proj.dir}
            image={proj.image}
            key={i}
            links={proj.links}
            mainLink={proj.mainLink}
            skills={proj.skills}
            title={proj.title} /> ));

    return (
        <HeroShell
            label={"03. Stuff I've Created"}
            loaded={loaded}
            pageRefs={pageRefs}
            refNum={3}>
            <Stack marginY={"5%"} ref={visRef} spacing={"10%"}>
                {newProjectMap}
                <Stack
                    align={"center"}
                    ref={visRef}
                    width={{ base: "85vw", lg: "65vw" }}>
                    <VStack
                        alignItems={"center"}
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"center"}
                        marginY={{ base: 6, md: 8, lg: 10 }}>
                        <Heading
                            fontFamily={"var(--chakra-fonts-mono)"}
                            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
                            <GoldSpan>—————————</GoldSpan>
                            {` Other Projects `}
                            <GoldSpan>—————————</GoldSpan>
                        </Heading>
                        <Image
                            alt={"face-icon"}
                            boxSize={10}
                            src={"/favicon.ico"} />
                    </VStack>
                    <Stack marginY={"5%"} paddingY={20} width={"100%"}>
                        {loaded && <ProjectGrid more={more} />}
                    </Stack>
                    <Button
                        backgroundColor={"transparent"}
                        border={"1px solid"}
                        borderColor={colorMode("rgb(190,147,45)", "goldenrod")}
                        color={colorMode("rgb(190,147,45)", "goldenrod")}
                        cursor={"pointer"}
                        fontFamily={"var(--chakra-fonts-mono)"}
                        onClick={() => setMore(!more)}
                        padding={7}
                        _hover={{
                            backgroundColor: colorMode("rgb(190,147,45)", "goldenrod"),
                            color: "inherit" }}>
                        {more ? "Show Less" : "Show More"}
                    </Button>
                    <GitCalendar />
                </Stack>
            </Stack>
            <Flex />
        </HeroShell>
    );
};
