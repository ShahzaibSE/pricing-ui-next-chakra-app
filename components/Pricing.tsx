"use client";

import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  StackProps,
  HStack,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { CheckIcon } from "../icons/icons";

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  console.log(rest);
  return (
    <HStack as="li" spacing="20px" {...rest}>
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text fontSize={['sm', 'md', 'lg', 'xl']}>{children}</Text>
    </HStack>
  );
};

export default function Pricing() {
  return (
    <Box
      w={[360, 600, 1024]}
      // maxW="994px"
      margin="auto"
      mt="-180px"
      borderRadius="12px"
      overflow="hidden"
      boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      textAlign="center"
    >
      <Flex display={{ md: "flex" }}>
        <Box bg="#F0EAFB" p="60px">
          <Text
            textAlign="center"
            fontWeight="800"
            fontSize="24px"
            color="#171923"
          >
            Primium PRO
          </Text>
          <Heading
            as="h3"
            textAlign="center"
            fontWeight="800"
            fontSize="60px"
            color="#171923"
          >
            $329
          </Heading>
          <Text
            textAlign="center"
            fontWeight="500"
            fontSize="18px"
            mt="8px"
            color="#171923"
          >
            billed just once
          </Text>
          <Button
            colorScheme="purple"
            borderRadius="8px"
            size="lg"
            w="282px"
            mt="24px"
          >
            Get Started
          </Button>
        </Box>
        <Box p="60px" fontSize="18px" bg="white">
          <Text textAlign="left" fontSize={['sm', 'md', 'lg', 'xl']}>
            Access these features when you get this pricing package for your
            business.
          </Text>
          <Stack as="ul" spacing="20px" pt="24px" textAlign="left">
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>Additional phone numbers</ListItem>
            <ListItem>Automated messages via Zapier</ListItem>
            <ListItem>24/7 support and consulting</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
