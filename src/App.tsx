import { BrowserRouter } from "react-router-dom";
import { RootGlobalStyle, Container } from "./globalStyle";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductsList from "./components/ProductList";

function App() {
  return (
    <BrowserRouter>
      <RootGlobalStyle />
      <Container>
        <Header />
      </Container>
      <Banner />
      <ProductsList background="gray" title="Promoções" />
    </BrowserRouter>
  );
}

export default App;
