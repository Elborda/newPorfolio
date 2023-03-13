import { useMediaQuery } from "@chakra-ui/react";

import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Banner from "./Banner";
import Tarjetas from "./Tarjetas";
import DownloadResume from "./DownloadResume";
import iconWork from "../assets/myworkIcon.svg";
import skills from "../assets/skills.svg";
import aboutMeIcon from "../assets/aboutMeIcon.svg";
import emailok from "../assets/emailok.svg";
import Form from "./Form";
import Footer from "./Footer";

const Main = () => {
  const [isLargerThan768] = useMediaQuery(`(min-width: 768px)`);

  return (
    <>
      <Banner
        background="#FEC572"
        svg={iconWork}
        w={isLargerThan768 ? "45%" : "65%"}
        content="My work"
        fontSize="35px"
        iconW="35px"
        h="120px"
        iconSize="20px"
      />
      <Flex justifyContent="center" alignItems="center">
        <SimpleGrid
          columns={[1, 2]}
          paddingTop="50px"
          spacingY="20px"
          spacingX="40px"
        >
          <Tarjetas />
          <Tarjetas />
          <Tarjetas />
          <Tarjetas />
        </SimpleGrid>
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <SimpleGrid
          columns={[1, 2]}
          paddingTop="50px"
          spacingY="20px"
          spacingX="40px"
        >
          <Box>
            <Banner
              background="#6E96FA"
              svg={aboutMeIcon}
              w="345px"
              content="About Me"
              fontSize="25px"
              iconW="17px"
              h="90px"
            />
            <Text
              maxWidth="345px"
              lineHeight="25px"
              bg="white"
              padding="15px"
              marginTop="10px"
              borderRadius="3px"
              border="3px solid black"
            >
              Hi, I'm Agustín, a self-taught Front-End developer. <br /> I like
              to create beautiful and colorful websites and stay up to date with
              technology trends. <br /> I am in continuous learning, currently
              creating projects with React Js.
            </Text>
          </Box>
          <Box>
            <Banner
              background="#bda0ea"
              svg={skills}
              w="345px"
              content="Skills"
              fontSize="25px"
              iconW="25px"
              h="90px"
            />
            <Flex
              maxWidth="345px"
              justifyContent="flex-start"
              alignItems="center"
              padding="15px"
              bg="white"
              marginTop="10px"
              border="3px solid black"
              borderRadius="3px"
              gap="10px"
              h="236px"
            >
              <Box bg="transparent">
                <Text
                  bg="transparent"
                  fontWeight="bold"
                  paddingBottom="15px"
                  maxWidth="345px"
                >
                  {">"} HTML
                </Text>
                <Text paddingBottom="15px" fontWeight="bold" bg="transparent">
                  {">"} CSS
                </Text>
                <Text bg="transparent" fontWeight="bold" paddingBottom="15px">
                  {" "}
                  {">"} JavaScript
                </Text>
                <Text bg="transparent" fontWeight="bold" paddingBottom="15px">
                  {">"} React Js
                </Text>
                <Text bg="transparent" fontWeight="bold" paddingBottom="15px">
                  {">"} Tailwind CSS
                </Text>
              </Box>
              <Box bg="transparent">
                <Text bg="transparent" fontWeight="bold" paddingBottom="15px">
                  {">"} Sass/Scss
                </Text>
                <Text bg="transparent" fontWeight="bold" paddingBottom="15px">
                  {">"} Bootstrap
                </Text>
                <Text bg="transparent" fontWeight="bold" paddingBottom="15px">
                  {">"} Git
                </Text>
                <Text bg="transparent" fontWeight="bold" paddingBottom="15px">
                  {">"} GitHub
                </Text>
                <Text bg="transparent" fontWeight="bold" paddingBottom="15px">
                  {">"} React Router
                </Text>
              </Box>
            </Flex>
          </Box>
        </SimpleGrid>
      </Flex>
      <Flex justifyContent="center" alignItems="center" marginTop="70px">
        <Banner
          background="#d9ef54"
          svg={emailok}
          w="300px"
          content="Get in touch"
          fontSize="35px"
          iconW="35px"
          h="120px"
          iconSize="20px"
        />
      </Flex>
      <Form />
      <Footer />
    </>
  );
};

export default Main;
