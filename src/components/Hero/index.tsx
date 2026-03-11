import { Container } from "../../globalStyle";
import { useAppDispatch } from "../../hooks/appDispacth";
import { add, open,  } from "../../store/reducers/cart";
import { formatPrices } from "../../utils";
import type { Game } from "../../types";
import { BannerHero, Infos } from "./style";
import { ButtonBanner } from "../Button/style";
import { Tag } from "../Tag";

type Props={
  game:Game;
};
export default function Hero({game}:Props) {
  const dispacth = useAppDispatch();
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
              <ButtonBanner
              onClick={()=> handleAdd()}
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
