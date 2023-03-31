import { Flex, ListItem, UnorderedList, Text, Image } from "@chakra-ui/react";
import logoRobot from "../assets/logo-robot.png";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        w="100%"
        flexDir="column"
      >
        <Image src={logoRobot} w="100px" h="100px" />
        <Flex flexDir="row" alignItems="center" justifyContent="space-between">
          <UnorderedList>
            <ListItem
              listStyleType="none"
              display="inline-block"
              padding="10px 50px"
            >
              <a href="#work">
                <Text>Works</Text>
              </a>
            </ListItem>
            <ListItem
              listStyleType="none"
              display="inline-block"
              padding="10px 50px"
            >
              <a href="#aboutMe">
                <Text>About me</Text>
              </a>
            </ListItem>
            <ListItem
              listStyleType="none"
              display="inline-block"
              padding="10px 50px"
            >
              <a href="#skills">
                <Text>Skills</Text>
              </a>
            </ListItem>
            <ListItem
              listStyleType="none"
              display="inline-block"
              padding="10px 50px"
            >
              <a href="#GetInContact">
                <Text>Contact</Text>
              </a>
            </ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
