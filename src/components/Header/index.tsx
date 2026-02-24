<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useAppSelector } from "../../hooks/appSelector";
=======
import { UseAppSelector } from "../../hooks/appSelector";
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
import { useAppSelector } from "../../hooks/appSelector";
>>>>>>> b69a459 (Commit 4: fix useAppSelector e desenvolvendo lógica de remoção de items do carrinho.)
=======
import { UseAppSelector } from "../../hooks/appSelector";
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
import { useAppSelector } from "../../hooks/appSelector";
>>>>>>> b69a459 (Commit 4: fix useAppSelector e desenvolvendo lógica de remoção de items do carrinho.)
import { Link } from "react-router-dom";
import { HeaderStyle } from "./style";
import logo from "../../assets/logo.svg";
import cart from "../../assets/carrinho.svg";
<<<<<<< HEAD

export default function Header() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const items =useAppSelector((state)=> state.cart.items);
=======
    const items =UseAppSelector((state)=> state.cart.items);
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
    const items =useAppSelector((state)=> state.cart.items);
>>>>>>> b69a459 (Commit 4: fix useAppSelector e desenvolvendo lógica de remoção de items do carrinho.)
=======
    const items =UseAppSelector((state)=> state.cart.items);
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
    const items =useAppSelector((state)=> state.cart.items);
>>>>>>> b69a459 (Commit 4: fix useAppSelector e desenvolvendo lógica de remoção de items do carrinho.)
  
=======
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
>>>>>>> cb1aa65 (commit 2: adicionando e removendo jogos  ao carrinho.)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <li>{items.length} - Produto(s)</li>
=======
        <li>{items} - Produto(s)</li>
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
        <li>{items.length} - Produto(s)</li>
>>>>>>> d97e153 (Commit 3: adicionando produtos ao carrinho.)
=======
        <li>{items} - Produto(s)</li>
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
        <li>{items.length} - Produto(s)</li>
>>>>>>> d97e153 (Commit 3: adicionando produtos ao carrinho.)
        <li>
          <a onClick={openCart} title={title}>
            <img src={cart} alt="Carrinho de compras" />
          </a>
        </li>
      </ul>
    </HeaderStyle>
  );
}
