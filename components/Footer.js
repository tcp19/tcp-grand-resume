import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';

  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        // css={{
        //   backdropFilter: 'saturate(180%) blur(5px)',
        //   backgroundColor: useColorModeValue(
        //     'rgba(255, 255, 255, 0.8)',
        //     'rgba(26, 32, 44, 0.8)'
        //   ),
        // }}
        >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Stack direction={'row'} spacing={6}>
           <Text>Build with ❤️ from Nigeria.  Teencode Africa </Text>
          </Stack>
          <Text>© {new Date().getFullYear()}. All rights reserved</Text>
        </Container>
      </Box>
    );
  }