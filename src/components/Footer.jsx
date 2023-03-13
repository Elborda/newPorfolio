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
        <Text>Works</Text>
        <Text>About Me</Text>
        <Text>Skills</Text>
        <Text>Get in touch</Text>
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
              <Image w="40px" bg="transparent" src={logoGit} />
            </Box>
          </Flex>
          <Box
            bg="white"
            padding="5px"
            border="3px solid black"
            borderRadius="3px"
          >
            <Image w="40px" bg="transparent" src={linkedin} />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
