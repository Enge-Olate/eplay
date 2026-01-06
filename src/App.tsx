import { BrowserRouter } from "react-router-dom";
import { RootGlobalStyle, Container } from "./globalStyle";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <RootGlobalStyle />
      <Container>
        <Header />
      </Container>
    </BrowserRouter>
  );
}

export default App;
