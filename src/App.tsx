import { BrowserRouter } from "react-router-dom";
import { RootGlobalStyle, Container } from "./globalStyle";
import Header from "./components/Header";
import Paths from "./components/pages/routes";

function App() {
  return (
    <BrowserRouter>
      <RootGlobalStyle />
      <Container>
        <Header />
      </Container>
      <Paths/>
    </BrowserRouter>
  );
}

export default App;
