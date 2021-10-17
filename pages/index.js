import Head from "next/head";
import Link from "next/link";
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
} from "@chakra-ui/react";
import Testimonials from "../components/Testimonal";

export default function BulildResume() {
    return (
        <>
            <Head>
                <title>Grand resume - Build Outstanding Resumes</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxW={"5xl"}>
                <Stack
                    textAlign={"center"}
                    align={"center"}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
                        lineHeight={"110%"}
                    >
                        Building tailored resumes{" "}
                        <Text
                            as={"span"}
                            className="u-stroke"
                            color={"#181C27"}
                        >
                            made easy
                        </Text>
                    </Heading>
                    <Text color={"gray.500"} maxW={"2xl"}>
                        An open-source resume builder with various templates
                        tailored to help make your resume standout to recruiters
                        and aid job search.
                    </Text>
                    <Stack spacing={6} direction={"row"}>
                        <Link href="/build-resume">
                            <Button
                                rounded={"full"}
                                px={6}
                                colorScheme={"#181C27"}
                                bg={"#181C27"}
                                _hover={{ bg: "#181C27" }}
                            >
                                Get started
                            </Button>
                        </Link>
                    </Stack>
                </Stack>

                <Testimonials />
            </Container>
        </>
    );
}
