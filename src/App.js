import {ChakraProvider} from "@chakra-ui/react"
import Register from "./components/Register"
import Home from "./components/Home";

function App() {
  return (
    <ChakraProvider >
      <Home/>
      {/* <Register  ></Register> */}
    </ChakraProvider>
  );
}

export default App;
