import { UseAppSelector } from "../../hooks/appSelector";
import { Link } from "react-router-dom";
import { HeaderStyle } from "./style";
import logo from "../../assets/logo.svg";
import cart from "../../assets/carrinho.svg";

export default function Header() {
    const items =UseAppSelector((state)=> state.cart.items);
  
  return (
    <HeaderStyle>
      <div>
        <Link to={"/"}>
          <img src={logo} alt="Logo da EPLAY" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to={"/categories"}>
              <a href="#">Categorias</a>
              </Link>
            </li>
            <li>
              <a href="#">Novidades</a>
            </li>
            <li>
              <a href="#">Promoções</a>
            </li>
          </ul>
        </nav>
      </div>
      <ul>
        <li>{items} - Produto(s)</li>
        <li>
          <a href="#">
            <img src={cart} alt="Carrinho de compras" />
          </a>
        </li>
      </ul>
    </HeaderStyle>
  );
}
