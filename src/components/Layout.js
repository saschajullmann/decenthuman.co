import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  Container,
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
        py={2}
        boxShadow="md"
        position="fixed"
        top={0}
        w="100%"
      >
        <Container maxWidth="1000px">
          <Flex>
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
        <Container maxWidth="1000px" overflow="hidden">
          {children}
        </Container>
      </Box>
    </Box>
  );
}

export default Layout;
