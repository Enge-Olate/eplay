import { BrowserRouter } from "react-router-dom";
import { RootGlobalStyle, Container } from "./globalStyle";
import Header from "./components/Header";
import Banner from "./components/Banner";

function App() {
  return (
    <BrowserRouter>
      <RootGlobalStyle />
      <Container>
        <Header />
      </Container>
      <Banner />
    </BrowserRouter>
  );
}

export default App;
