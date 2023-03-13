import { Box, Flex, Heading, Img } from "@chakra-ui/react";
import React from "react";
import workIcon from "../assets/myworkIcon.svg";

const Banner = (props) => {
  console.log(props);

  return (
    <Flex justifyContent="center">
      <Flex
        position="relative"
        background={props.background}
        w={props.w}
        h={props.h}
        zIndex="10"
        border="3px solid black"
        rounded="5px"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          as="h4"
          bgColor="transparent"
          padding="0 0 10px 0"
          zIndex="100"
          fontSize={props.fontSize}
        >
          {props.content}
        </Heading>
        <Img
          bgColor="transparent"
          zIndex="100"
          w={props.iconW}
          src={props.svg}
        ></Img>
        <Box
          w="100%"
          h={props.h}
          bgColor="white"
          position="absolute"
          zIndex="5"
          top="-12px"
          left="-10px"
          border="3px solid black"
          rounded="5px"
        />
      </Flex>
    </Flex>
  );
};

export default Banner;
