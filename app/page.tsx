"use client";

import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from "./page.module.css";
import {
  Grid,
  GridItem,
  Flex,
  Spacer,
  SimpleGrid,
  Box,
  Center,
} from "@chakra-ui/react";
// Components.
import Header from "../components/Header";
import Pricing from "../components/Pricing";
import {Features} from "../components/Features";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box>
      <Header />
      <Pricing />
      <Features />
    </Box>
  );
}
