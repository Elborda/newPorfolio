import { Button, Flex, Img, Link, PopoverAnchor, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import paste from "../assets/paste.svg";
import download from "../assets/download.svg";

const DownloadResume = () => {
  const [open, setOpen] = useState(false);

  const openedDiv = (
    <Flex
      h="45px"
      background="#7A60FE"
      w="200px"
      justifyContent="center"
      alignItems="center"
      border="2.3px solid black"
      rounded="5px"
    >
      <Link href="https://www.w3schools.com/tags/tag_a.asp" target="_blank">
        <Img src={download} w="25px" bg="transparent"></Img>
      </Link>
    </Flex>
  );

  const openDiv = () => {
    setOpen((prevState) => {
      return prevState ? false : true;
    });
  };

  return (
    <>
      <Flex
        w="216px"
        marginTop="40px"
        h="45px"
        justifyContent="center"
        alignItems="center"
        gap="15px"
        bg="white"
        padding="0 10px 0 10px"
        border="2.3px solid black"
        rounded="5px"
        onClick={openDiv}
      >
        <Img src={paste} w="25px" bg="transparent" />
        <Text fontWeight="bold" bg="transparent">
          Download my resumé
        </Text>
      </Flex>
      <Flex>{open && openedDiv}</Flex>
    </>
  );
};

export default DownloadResume;
