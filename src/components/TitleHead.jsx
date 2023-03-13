import { Flex, Text, Heading, Highlight } from "@chakra-ui/react";
import React from "react";

const TitleHead = () => {
  return (
    <Flex
      justifyContent="center"
      flexDir="column"
      alignItems="center"
      padding="40px 0 40px 0"
    >
      <Heading as="h3" fontSize="40px" lineHeight="60px">
        <Highlight
          query="Agustín."
          styles={{ px: "2", py: "1", rounded: "", bg: "#D9EF54" }}
        >
          Hey! I'm Agustín.
        </Highlight>
      </Heading>
      <Heading fontSize="40px">I build amazing</Heading>
      <Heading fontSize="40px">web experiences.</Heading>
      <Text fontSize="35px" fontWeight="light">
        FrontEnd dev from <span className="argentina">ARG</span>
      </Text>
    </Flex>
  );
};

export default TitleHead;
