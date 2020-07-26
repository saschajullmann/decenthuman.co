import React from "react";
import { Box } from "@chakra-ui/core";

function Container({ children }) {
  return (
    <Box px="10px" maxWidth="1000px" m="auto">
      {children}
    </Box>
  );
}

export default Container;
