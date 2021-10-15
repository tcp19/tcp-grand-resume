import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";

import React from "react";

export const Footer = () => (
    <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
    >
        <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
        >
            <Stack direction={"row"} spacing={6}>
                <Text>Build with ❤️ from Nigeria. Teencode Africa </Text>
            </Stack>
            <Text>© {new Date().getFullYear()}. All rights reserved</Text>
        </Container>
    </Box>
);

export default Footer;
