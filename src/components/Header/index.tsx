import { useAppSelector } from "../../hooks/appSelector";
import { Link } from "react-router-dom";
import { HeaderStyle } from "./style";
import logo from "../../assets/logo.svg";
import cart from "../../assets/carrinho.svg";
import type { RootState } from "../../store";
import { useAppDispatch } from "../../hooks/appDispacth";
import { open } from "../../store/reducers/cart";
type Props={
  title: string;
}
export default function Header({title = "clique aqui para ver o carrinho!"}: Props) {
    const {items} =useAppSelector((state: RootState)=> state.cart);
    const dispatch = useAppDispatch();
    const openCart = ()=>{
      dispatch(open());
    }
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
        <li>{items.length} - Produto(s)</li>
        <li>
          <a onClick={openCart} title={title}>
            <img src={cart} alt="Carrinho de compras" />
          </a>
        </li>
      </ul>
    </HeaderStyle>
  );
}
