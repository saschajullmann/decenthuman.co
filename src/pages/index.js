import React from "react";
import { Box, Flex, Stack, Heading, Text, Icon } from "@chakra-ui/core";
import Layout from "../components/Layout";
import { FaAngleRight } from "react-icons/fa";

const entries = [
  "Be humble",
  "Don't assume shit about others",
  "Don't be greedy",
  "Don't use your phone speakers in public",
  "Be honest (with yourself and others)",
  "Don't litter",
  "Don't interact with your phone when talking to someone",
  "Don't hurt others (physically or emotionally)",
  "Don't think you are special (cause you're not)",
  "When someone holds a door open for you say 'thank you'",
  "Be aware of the people and animals around you",
  "Greet others with a smile",
  "Be empathic",
];

export default () => {
  return (
    <Layout>
      <Box my={10}>
        <Text fontSize="xl">
          It's not that hard to be a decent human being... here are a few
          pointers:
        </Text>
      </Box>
      <Stack spacing={8}>
        {entries.map((entry) => {
          return (
            <Flex>
              <Flex alignItems="center">
                <Icon as={FaAngleRight} />
              </Flex>
              <Heading size="sm">{entry}</Heading>
            </Flex>
          );
        })}
      </Stack>
    </Layout>
  );
};
