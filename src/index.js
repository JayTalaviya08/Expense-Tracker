import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import GlobleState from "./context/contextindex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobleState>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </GlobleState>
);
