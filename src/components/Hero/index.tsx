import { Container } from "../../globalStyle";
import { formatPrices } from "../../utils";
import Button from "../Button";
import type { Game } from "../pages/home";
import { Tag } from "../Tag";
import { BannerHero, Infos } from "./style";
type Props={
  game:Game;
};
export default function Hero({game}:Props) {
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
              <Button
              type="button"
              variant="primary"
              title="Clique aqui para adicionar este jogo ao carrinho."
            >
              Adicionar ao carrinho
            </Button>
            )}
          </Infos>
        </div>
      </Container>
    </BannerHero>
  );
}
