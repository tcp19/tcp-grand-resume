import React from "react";
import {
    Box,
    Text,
    Flex,
    Center,
    Divider,
    UnorderedList,
    ListItem,
    List,
} from "@chakra-ui/react";
import { formatDate } from "../utils/formatDate";
import Link from "next/link";
import { capitalizeFirst } from "../utils/capitalizeFirst";

export default function DefaultTemplate({ globalRecord, toPrint }) {
    const {
        firstName,
        lastName,
        headLine,
        email,
        websiteUrl,
        summary,
        city,
        country,
        phoneNumber,
        workExperiences,
        education,
        skills,
        languages,
        projects,
    } = globalRecord;

    return (
        <>
            <Box
                maxW={{ xl: "8xl" }}
                my={toPrint ? "0 !important" : "2rem"}
                h="auto"
                px={{ base: toPrint ? "20" : "5", xl: "20" }}
                py="16"
                bg="#f5f4fc"
            >
                <Flex flexWrap={"wrap"} maxW="4xl">
                    <Text
                        fontSize={{ base: toPrint ? "5xl" : "3xl", xl: "5xl" }}
                        color="#323332"
                    >
                        {firstName && capitalizeFirst(firstName)}{" "}
                        {lastName && capitalizeFirst(lastName)}
                    </Text>
                    <Flex
                        my="2"
                        flexWrap="wrap"
                        fontSize={{ base: toPrint ? "xl" : "md", xl: "xl" }}
                        flexDirection="row"
                        justifyContent="flex-start"
                    >
                        <Text fontSize="xl" color="#323332">
                            {headLine && headLine}
                        </Text>
                        {websiteUrl && (
                            <>
                                <Center mx="3" height="30px">
                                    <Divider
                                        colorScheme="blackAlpha"
                                        orientation="vertical"
                                    />
                                </Center>
                                <Text color="#323332">
                                    <Link replace href={`${websiteUrl}`}>
                                        {websiteUrl}
                                    </Link>
                                </Text>
                            </>
                        )}
                        {email && (
                            <>
                                <Center mx="3" height="30px">
                                    <Divider
                                        colorScheme="blackAlpha"
                                        orientation="vertical"
                                    />
                                </Center>
                                <Text color="#323332">{email}</Text>
                            </>
                        )}
                        {phoneNumber && (
                            <>
                                <Center mx="3" height="30px">
                                    <Divider
                                        colorScheme="blackAlpha"
                                        orientation="vertical"
                                    />
                                </Center>
                                <Text color="#323332">
                                    {phoneNumber && phoneNumber}
                                </Text>
                            </>
                        )}
                        {city && (
                            <>
                                <Center mx="3" height="30px">
                                    <Divider
                                        colorScheme="blackAlpha"
                                        orientation="vertical"
                                    />
                                </Center>
                                <Text color="#323332">
                                    {city && city}
                                    {","} {country && country}
                                </Text>
                            </>
                        )}

                        <Center mx="3" height="30px">
                            <Divider
                                colorScheme="blackAlpha"
                                orientation="vertical"
                            />
                        </Center>
                    </Flex>
                    {summary && (
                        <Text
                            fontSize={{ base: toPrint ? "lg" : "md", xl: "lg" }}
                            my="3"
                            color="#939598"
                        >
                            {summary}
                        </Text>
                    )}
                </Flex>
                <Box my="10">
                    <Divider
                        colorScheme="blackAlpha"
                        orientation="horizontal"
                    />
                </Box>

                <Flex
                    w="100%"
                    flexDirection={{
                        base: toPrint ? "row" : "column",
                        xl: "row",
                    }}
                >
                    <Flex flex="0 0 50%" flexDirection="column">
                        {workExperiences.length > 0 && (
                            <>
                                <Text fontSize="2xl"> Experience </Text>
                                {workExperiences &&
                                    workExperiences.map(
                                        (
                                            {
                                                company,
                                                title,
                                                start_date,
                                                end_date,
                                                isCurrent,
                                                description,
                                            },
                                            idx
                                        ) => (
                                            <Box
                                                key={idx}
                                                my="3"
                                                d="flex"
                                                flexDirection="column"
                                            >
                                                <Text
                                                    fontSize="xl"
                                                    fontWeight="bold"
                                                >
                                                    {company}
                                                </Text>
                                                {title && (
                                                    <Flex
                                                        fontSize={{
                                                            base: toPrint
                                                                ? "lg"
                                                                : "3md",
                                                            xl: "lg",
                                                        }}
                                                        flexDirection={{
                                                            base: toPrint
                                                                ? "row"
                                                                : "column",
                                                            xl: "row",
                                                        }}
                                                        textColor="#939598"
                                                    >
                                                        <Text>
                                                            {title && title}
                                                        </Text>
                                                        <Center
                                                            mx="3"
                                                            height="30px"
                                                        >
                                                            <Divider
                                                                colorScheme="blackAlpha"
                                                                orientation="vertical"
                                                            />
                                                        </Center>
                                                        {start_date &&
                                                            end_date && (
                                                                <Text>
                                                                    {start_date &&
                                                                        formatDate(
                                                                            start_date
                                                                        )}{" "}
                                                                    {"-"}{" "}
                                                                    {end_date &&
                                                                    !isCurrent
                                                                        ? formatDate(
                                                                              end_date
                                                                          )
                                                                        : "Present"}
                                                                </Text>
                                                            )}
                                                    </Flex>
                                                )}

                                                <UnorderedList my="4">
                                                    {description &&
                                                        description.toString()
                                                            .split`\n`.map(
                                                            (itm, idx) => (
                                                                <ListItem
                                                                    key={idx}
                                                                >
                                                                    {itm}
                                                                </ListItem>
                                                            )
                                                        )}
                                                </UnorderedList>
                                            </Box>
                                        )
                                    )}
                            </>
                        )}
                    </Flex>

                    <Flex
                        ml={{ base: toPrint ? "20" : "0", xl: "20" }}
                        flex="1"
                        flexDirection="column"
                    >
                        <Text fontSize="2xl"> Education </Text>
                        {education &&
                            education.map(
                                (
                                    {
                                        institution,
                                        studyType,
                                        start_date,
                                        end_date,
                                        degree,
                                        description,
                                    },
                                    idx
                                ) => (
                                    <Box
                                        key={idx}
                                        my="3"
                                        d="flex"
                                        flexDirection="column"
                                    >
                                        <Text
                                            fontSize="xl"
                                            my="2"
                                            fontWeight="bold"
                                        >
                                            {institution}
                                        </Text>
                                        {institution && (
                                            <>
                                                <Text>
                                                    {studyType && studyType}
                                                </Text>
                                                <Flex
                                                    fontSize={{
                                                        base: toPrint
                                                            ? "lg"
                                                            : "md",
                                                        xl: "lg",
                                                    }}
                                                    my="4"
                                                    flexDirection={{
                                                        base: toPrint
                                                            ? "row"
                                                            : "column",
                                                        xl: "row",
                                                    }}
                                                    textColor="#939598"
                                                >
                                                    {degree && (
                                                        <>
                                                            <Text>
                                                                {degree}
                                                            </Text>
                                                            <Center
                                                                mx="3"
                                                                height="30px"
                                                            >
                                                                <Divider
                                                                    colorScheme="blackAlpha"
                                                                    orientation="vertical"
                                                                />
                                                            </Center>
                                                        </>
                                                    )}
                                                    {start_date && end_date && (
                                                        <Text>
                                                            {start_date &&
                                                                formatDate(
                                                                    start_date
                                                                )}{" "}
                                                            {"-"}{" "}
                                                            {formatDate(
                                                                end_date
                                                            )}
                                                        </Text>
                                                    )}
                                                </Flex>
                                            </>
                                        )}
                                    </Box>
                                )
                            )}
                        <Box my="4">
                            <Text fontSize="2xl"> Projects </Text>
                            {projects.length > 0 &&
                                projects.map(
                                    (
                                        {
                                            title,
                                            url,
                                            start_date,
                                            description,
                                            end_date,
                                        },
                                        idx
                                    ) => (
                                        <Box
                                            key={idx}
                                            my="3"
                                            d="flex"
                                            flexDirection="column"
                                        >
                                            <a
                                                href={
                                                    url ? url : "/build-resume"
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                fontSize="xl"
                                                my="2"
                                                fontWeight="bold"
                                            >
                                                {title}
                                            </a>
                                            {description && (
                                                <>
                                                    <Flex
                                                        fontSize={{
                                                            base: toPrint
                                                                ? "md"
                                                                : "xs",
                                                            xl: "md",
                                                        }}
                                                        my="4"
                                                        flexDirection={"column"}
                                                        textColor="#939598"
                                                    >
                                                        {description && (
                                                            <>
                                                                <Text align="justify">
                                                                    {
                                                                        description
                                                                    }
                                                                </Text>
                                                            </>
                                                        )}
                                                        {start_date &&
                                                            end_date && (
                                                                <Text my="1">
                                                                    {start_date &&
                                                                        formatDate(
                                                                            start_date
                                                                        )}{" "}
                                                                    {"-"}{" "}
                                                                    {formatDate(
                                                                        end_date
                                                                    )}
                                                                </Text>
                                                            )}
                                                    </Flex>
                                                    <Center
                                                        my="1"
                                                        height="20px"
                                                    >
                                                        <Divider
                                                            colorScheme="blackAlpha"
                                                            orientation="horizontal"
                                                        />
                                                    </Center>
                                                </>
                                            )}
                                        </Box>
                                    )
                                )}
                        </Box>

                        <Box my="4">
                            <Text fontSize="2xl"> Skills </Text>
                            <UnorderedList my="4">
                                {skills &&
                                    skills.map((itm, idx) => (
                                        <ListItem key={idx}>{itm}</ListItem>
                                    ))}
                            </UnorderedList>
                        </Box>

                        <Box my="4">
                            <Text fontSize="2xl"> Languages </Text>
                            <List spacing={3} my="4">
                                {languages.length > 0 &&
                                    languages.map((itm, idx) => (
                                        <ListItem key={idx}>
                                            {itm.name} - {itm.proficiency}
                                        </ListItem>
                                    ))}
                            </List>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
