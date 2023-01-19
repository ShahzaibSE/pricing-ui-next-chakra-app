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
} from "@chakra-ui/react";
//Icons.
import {
  MoneyBackGuaranteeIcon,
  MonthlySubscriptionIcon,
  HassleFreeIcon,
} from "../icons/icons";

interface FeatureProps extends StackProps {
  icon: React.ElementType;
}

export default function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <Box>
      <HStack {...rest} spacing="24px">
        <Icon as={icon} boxSize="48px" />
        <Text textAlign="left" fontSize="18px" fontWeight="700">
          {children}
        </Text>
      </HStack>
    </Box>
  );
}

export function Features() {
  return (
    <Box maxW="1024px" m="auto" pt="60px" pb="32px">
      <HStack px="48px" spacing="20px">
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </HStack>
    </Box>
  );
}
