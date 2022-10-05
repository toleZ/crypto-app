import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CoinsProvider from "./context/CoinsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <CoinsProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CoinsProvider>
  </ChakraProvider>
);
