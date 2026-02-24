import { Container } from "../../globalStyle";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useAppDispatch } from "../../hooks/appDispacth";
import { add, open } from "../../store/reducers/cart";
import { formatPrices } from "../../utils";
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
import { UseAppDispatch } from "../../hooks/appDispacth";
import { add } from "../../store/reducers/cart";
import { formatPrices } from "../../utils";
import Button from "../Button";
<<<<<<< HEAD
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
import { useAppDispatch } from "../../hooks/appDispacth";
import { add } from "../../store/reducers/cart";
import { formatPrices } from "../../utils";
>>>>>>> d97e153 (Commit 3: adicionando produtos ao carrinho.)
=======
import { useAppDispatch } from "../../hooks/appDispacth";
import { add } from "../../store/reducers/cart";
import { formatPrices } from "../../utils";
>>>>>>> d97e153 (Commit 3: adicionando produtos ao carrinho.)
import type { Game } from "../../pages/home";
=======
import type { Game } from "../../types";
>>>>>>> a987dbf (Commit 3: instalando dependências do Hashlink e atribuindo rotas ao componente Footer.)
=======
import type { Game } from "../../pages/home";
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
import type { Game } from "../../types";
>>>>>>> a987dbf (Commit 3: instalando dependências do Hashlink e atribuindo rotas ao componente Footer.)
import { Tag } from "../Tag";
import { BannerHero, Infos } from "./style";
import { ButtonBanner } from "../Button/style";
type Props={
  game:Game;
};
export default function Hero({game}:Props) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const dispacth = useAppDispatch();
=======
  const dispacth = UseAppDispatch();
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
  const dispacth = useAppDispatch();
>>>>>>> d97e153 (Commit 3: adicionando produtos ao carrinho.)
=======
  const dispacth = UseAppDispatch();
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
  const dispacth = useAppDispatch();
>>>>>>> d97e153 (Commit 3: adicionando produtos ao carrinho.)
  const handleAdd =()=>{
    dispacth(add(game))
    dispacth(open())
  }
  return (
    <BannerHero style={{ backgroundImage: `url(${game.media.cover})` }}>
      <Container>
        <div className="container">
          <div>
            <Tag>{game.details.category}</Tag>
            <Tag>{game.details.system}</Tag>
          </div>
          <Infos>
            <h2>{game.name}</h2>
            <p>
              {game.prices.discount &&(
              <span>De {formatPrices(game.prices.old)} </span>
              )}
              {game.prices.current &&<>Por {formatPrices(game.prices.current)}</>}
            </p>
            <p>{game.details.developer}</p>
            {game.prices.current &&(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <ButtonBanner
              onClick={()=> handleAdd()}
=======
              <Button
              onClick={()=> handleAdd}
<<<<<<< HEAD
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
              <ButtonBanner
              onClick={()=> handleAdd()}
>>>>>>> d97e153 (Commit 3: adicionando produtos ao carrinho.)
=======
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
              <ButtonBanner
              onClick={()=> handleAdd()}
>>>>>>> d97e153 (Commit 3: adicionando produtos ao carrinho.)
              type="button"
              variant="primary"
              title="Clique aqui para adicionar este jogo ao carrinho."
            >
              Adicionar ao carrinho
            </ButtonBanner>
            )}
          </Infos>
        </div>
      </Container>
    </BannerHero>
  );
}
