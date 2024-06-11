import { Container, Flex, Box } from "@chakra-ui/react";
import "./App.css";
import Main from "./component/main/main";
import { useContext } from "react";
import { GlobleContext } from "./context/contextindex";

function App() {
  const { totalExpense, totalIncome } = useContext(GlobleContext);
  return (
    <Container
      bg={totalIncome - totalExpense < 0 ? "red.100" : "blue.100"}
      maxW={"container.3xl"}
      height={"100vh"}
      p={"0"}
    >
      <Flex height={"full"}>
        <Box height={"full"} flex={5} w={["20%", "30%", "20%", "50%", "60%"]}>
          <Main />
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
