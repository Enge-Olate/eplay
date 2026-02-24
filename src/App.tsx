import { BrowserRouter } from "react-router-dom";
import { RootGlobalStyle, Container } from "./globalStyle";
import Header from "./components/Header";
import Paths from "./pages/routes";
import { Provider } from "react-redux";
import { store } from "./store";
<<<<<<< HEAD
<<<<<<< HEAD
import Cart from "./components/Cart";
=======
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
import Cart from "./components/Cart";
>>>>>>> 2c77a71 (Commit 1: UI ok.)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootGlobalStyle />
        <Container>
          <Header />
        </Container>
        <Paths />
<<<<<<< HEAD
<<<<<<< HEAD
        <Cart/>
=======
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
        <Cart/>
>>>>>>> 2c77a71 (Commit 1: UI ok.)
      </BrowserRouter>
    </Provider>
  );
}

export default App;
