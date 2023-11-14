import React from "react";
import Nav from "./Nav";
import DisplayCards from "./DisplayCards";
import { ChakraProvider } from "@chakra-ui/react";

import hogs from "../porkers_data";

function App() {
  return (
  
      <ChakraProvider>
        <Nav />
        <DisplayCards />
      </ChakraProvider>
  
  );
}

export default App;
