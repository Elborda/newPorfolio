import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logoGit from "../assets/image.svg";
import linkedin from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <Flex
      justifyContent="space-between"
      borderTop="2px solid black"
      marginTop="50px"
      padding="20px 50px 20px 50px"
    >
      <Flex flexDir="column">
        <Text
          fontWeight="bold"
          borderBottom="1px solid black"
          paddingBottom="5px"
          marginBottom="10px"
        >
          Sections
        </Text>
        <a href="#work">
          <Text>Works</Text>
        </a>
        <a href="#aboutMe">
          <Text>About Me</Text>
        </a>
        <a href="#skills">
          <Text>Skills</Text>
        </a>
        <a href="#GetInContact">
          <Text>Get in touch</Text>
        </a>
      </Flex>
      <Flex flexDir="column">
        <Text
          fontWeight="bold"
          borderBottom="1px solid black"
          paddingBottom="2px"
        >
          Follow me
        </Text>
        <Flex gap="20px" marginTop="15px">
          <Flex>
            <Box
              bg="white"
              padding="5px"
              border="3px solid black"
              zIndex="10"
              borderRadius="3px"
              position="relative"
            >
              <a href="https://github.com/Elborda" target="_blank">
                <Image w="40px" bg="transparent" src={logoGit} />
              </a>
            </Box>
          </Flex>
          <Box
            bg="white"
            padding="5px"
            border="3px solid black"
            borderRadius="3px"
          >
            <a
              href="https://www.linkedin.com/in/agustin-bordachar-333716233/"
              target="_blank"
            >
              <Image w="40px" bg="transparent" src={linkedin} />
            </a>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
