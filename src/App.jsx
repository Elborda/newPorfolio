import "./App.css";
import { Box, Flex } from "@chakra-ui/react";
import TitleHead from "./components/TitleHead";
import Navbar from "./components/navbar";
import Main from "./components/Main";
import DownloadResume from "../src/components/DownloadResume";

function App() {
  return (
    <>
      <Flex
        w="100%"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <Navbar />
        <Box w="100%">
          <TitleHead />
          <Main />
        </Box>
      </Flex>
    </>
  );
}

export default App;
