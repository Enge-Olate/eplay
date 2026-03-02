import { BrowserRouter } from "react-router-dom";
import { RootGlobalStyle, Container } from "./globalStyle";
import Header from "./components/Header";
import Paths from "./pages/routes";
import { Provider } from "react-redux";
import { store } from "./store";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootGlobalStyle />
        <Container>
          <Header />
        </Container>
        <Paths />
        <Cart/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
