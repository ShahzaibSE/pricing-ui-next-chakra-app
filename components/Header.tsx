"use client";

import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box pb="112px" as="section">
      <Box bg="#6B46C1" color="#F7FAFC" pt="90px" pb="198px" px="32px">
        <Heading
          textAlign={["left", "center"]}
          fontWeight="800"
          // fontSize="48px"
          fontSize={["30px", "48px", "2xl", "3xl", "4xl"]}
          color="#F7FAFC"
          mb="20px"
        >
          Simple pricing for your business
        </Heading>
        {/* <Text textAlign={["left", "center"]} fontWeight="500" fontSize="24px" color="#F7FAFC"> */}
        <Text
          textAlign={["left", "center"]}
          fontWeight="500"
          fontSize={["sm", "md", "lg", "xl"]}
          color="#F7FAFC"
        >
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
}
