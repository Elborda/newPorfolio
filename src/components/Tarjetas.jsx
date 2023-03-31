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

import giffyPage from "../assets/giffyPage.jpg";
import grocery from "../assets/grocery.jpg";
import gitUsers from "../assets/gitUsers.jpg";
import countriesPhoto from "../assets/countries.jpg";
import logoGit from "../assets/image.svg";

const Tarjetas = (props) => {
  return (
    <>
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
          <Img src={giffyPage} />
        </Box>
        <Heading
          bgColor="transparent"
          as="h5"
          fontSize="25px"
          padding="10px 0 10px 0"
        >
          Giffy
        </Heading>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          background="white"
        >
          <Text backgroundColor="transparent">
            This project is a GIF searcher in which I used the Giphy API.
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
              CSS
            </Text>
            {/* <Text
            bgColor="transparent"
            border="2px solid black"
            padding="5px 4px 5px 4px"
            rounded="4px"
          ></Text> */}
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
              <a href="https://gif-searcher-mu.vercel.app/" target="_blank">
                DEPLOY
              </a>
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
          <a href="https://github.com/Elborda/gif-searcher" target="_blank">
            <Img src={logoGit} w="58px" bg="transparent"></Img>
          </a>
        </Flex>
      </Flex>
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
          <Img src={grocery} />
        </Box>
        <Heading
          bgColor="transparent"
          as="h5"
          fontSize="25px"
          padding="10px 0 10px 0"
        >
          Todo List
        </Heading>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          background="white"
        >
          <Text backgroundColor="transparent">
            This project is a classic Todo List with all the functionalities.
            Add, Erase, Edit.
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
              CSS
            </Text>
            {/* <Text
            bgColor="transparent"
            border="2px solid black"
            padding="5px 4px 5px 4px"
            rounded="4px"
          ></Text> */}
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
              <a
                href="https://todo-list-project-eight.vercel.app/"
                target="_blank"
              >
                DEPLOY
              </a>
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
          <Img src={gitUsers} />
        </Box>
        <Heading
          bgColor="transparent"
          as="h5"
          fontSize="25px"
          padding="10px 0 10px 0"
        >
          Git Users
        </Heading>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          background="white"
        >
          <Text backgroundColor="transparent">
            {" "}
            This project is a Github users searcher. Using GitHub API and a
            system of pagination.
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
              Chakra UI
            </Text>
            {/* <Text
              bgColor="transparent"
              border="2px solid black"
              padding="5px 4px 5px 4px"
              rounded="4px"
            ></Text> */}
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
              <a href="https://git-users-one.vercel.app/" target="_blank">
                DEPLOY
              </a>
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
          <Img src={countriesPhoto} />
        </Box>
        <Heading
          bgColor="transparent"
          as="h5"
          fontSize="25px"
          padding="10px 0 10px 0"
        >
          Countries
        </Heading>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          background="white"
        >
          <Text backgroundColor="transparent">
            This project is a Country flag searcher, with a filter system. And a
            night mode.
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
              Chakra UI
            </Text>
            {/* <Text
            bgColor="transparent"
            border="2px solid black"
            padding="5px 4px 5px 4px"
            rounded="4px"
          ></Text> */}
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
              <a
                href="https://countries-project-pearl.vercel.app/"
                target="_blank"
              >
                DEPLOY
              </a>
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
    </>
  );
};

export default Tarjetas;
