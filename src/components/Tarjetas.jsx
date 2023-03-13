import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import logoGit from "../assets/image.svg";

const Tarjetas = () => {
  return (
    <Flex
      height="550px"
      w="350px"
      bg="white"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      padding="20px"
      border="3px solid black"
    >
      <Box>
        <Img src="https://ivansanchez-portfolio.vercel.app/img/project-6.png" />
      </Box>
      <Heading
        bgColor="transparent"
        as="h5"
        fontSize="25px"
        padding="10px 0 10px 0"
      >
        Movies App
      </Heading>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        background="white"
      >
        <Text backgroundColor="transparent">
          SPA for the 'Alkemy React Skill Up'.
        </Text>
        <Heading
          as="h5"
          backgroundColor="transparent"
          fontSize="25px"
          padding="10px 0 10px 0"
        >
          Technologies
        </Heading>
        <Flex
          flexDir="row"
          justifyContent="center"
          alignItems="center"
          padding="10px"
          gap="10px"
          backgroundColor="transparent"
          marginBottom="10px"
        >
          <Text
            bgColor="transparent"
            border="2px solid black"
            padding="5px 4px 5px 4px"
            rounded="4px"
          >
            React
          </Text>
          <Text
            bgColor="transparent"
            border="2px solid black"
            padding="5px 4px 5px 4px"
            rounded="4px"
          >
            Tailwind
          </Text>
          <Text
            bgColor="transparent"
            border="2px solid black"
            padding="5px 4px 5px 4px"
            rounded="4px"
          >
            ReactRouter
          </Text>
        </Flex>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        bgColor="transparent"
        gap="30px"
      >
        <Flex position="relative" background="white">
          <Button background="white" border="2px solid black" zIndex="50">
            DEPLOY
          </Button>
          <Box
            position="absolute"
            w="100%"
            height="100%"
            zIndex="10"
            background="black"
            top="4px"
            left="3px"
            rounded="5px"
          />
        </Flex>
        <Img src={logoGit} w="58px" bg="transparent"></Img>
      </Flex>
    </Flex>
  );
};

export default Tarjetas;
