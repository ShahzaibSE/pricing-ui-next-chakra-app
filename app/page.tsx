"use client";

import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
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

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
        <Header />
  );
}
