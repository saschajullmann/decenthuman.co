import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Container,
  IconButton,
  Link,
} from "@chakra-ui/core";
import { FaGithub } from "react-icons/fa";

function Layout({ children }) {
  const [height, setHeight] = useState("");

  useEffect(() => {
    const header = document.getElementById("header");
    setHeight(`${header.offsetHeight}px`);
  }, []);

  return (
    <Box color="gray.600">
      <Box
        id="header"
        bg="white"
        px={4}
        py={2}
        boxShadow="md"
        position="fixed"
        top={0}
        w="100%"
      >
        <Container maxW="1000px">
          <Flex py={1}>
            <Heading fontFamily="Pacifico">decenthuman.co</Heading>
            <Flex alignItems="center" ml="auto">
              <Link
                href="https://github.com/saschajullmann/decenthuman.co"
                isExternal
              >
                <IconButton
                  bg="transparent"
                  as={FaGithub}
                  boxSize="32px"
                  _hover={{ cursor: "pointer", bg: "transparent" }}
                />
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Box mt={height}>
        <Container overflow="hidden" maxW="1000px">
          {children}
        </Container>
      </Box>
    </Box>
  );
}

export default Layout;
