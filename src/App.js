import {ChakraProvider, Button} from "@chakra-ui/react"
import Login from "./components/Login"


function App() {
  return (
    <ChakraProvider >
      <Login  ></Login>
    </ChakraProvider>
  );
}

export default App;
