import { useAppSelector } from "../../hooks/appSelector";
import { Link } from "react-router-dom";
import { HeaderStyle } from "./style";
import logo from "../../assets/logo.svg";
import cart from "../../assets/carrinho.svg";
import type { RootState } from "../../store";
import { useAppDispatch } from "../../hooks/appDispacth";
import { open } from "../../store/reducers/cart";
import { HashLink } from "react-router-hash-link";

type Props = {
  title?: string;
};
const headerLinks: FooterLink[] = [
  { label: "Categorias", path: "/categories" },
  { label: "Novidades", path: "/#em-breve" },
  { label: "Promoções", path: "/#promocoes" },
];
export default function Header({
  title = "clique aqui para ver o carrinho!",
}: Props) {
  const { items } = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();
  const openCart = () => {
    dispatch(open());
  };
  return (
    <HeaderStyle>
      <div>
        <Link to={"/"}>
          <img src={logo} alt="Logo da EPLAY" />
        </Link>
        <nav>
          <ul>
            {headerLinks.map((link) => (
              <li key={link.path}>
                <HashLink
                  title={`Dê um bizu em nossas ${link.label}!`}
                  smooth
                  to={link.path}
                >
                  {link.label}
                </HashLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul>
        <li>
          <a role="button" onClick={openCart} title={title}>
            {items.length} - Produto(s)
          </a>
        </li>
        <li>
          <a role="button" onClick={openCart} title={title}>
            <img src={cart} alt="Carrinho de compras" />
          </a>
        </li>
      </ul>
    </HeaderStyle>
  );
}
