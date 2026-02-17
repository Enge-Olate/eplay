import { useEffect, useState } from "react";
import { Container } from "../../globalStyle";
import Button from "../Button";
import { Tag } from "../Tag";
import { BannerStyle, PrecoBanner, Titulo } from "./style";
import type { Game } from "../pages/home";
import { formatPrices } from "../../utils";
export default function Banner() {
  const [game, setGame] = useState<Game>();
  useEffect(() => {
    fetch("https://api-ebac.vercel.app/api/eplay/destaque")
      .then((res) => res.json())
      .then((res) => setGame(res));
  }, []);
  if (!game) {
    return (
      <Container>
        <h4>Carregando...</h4>
      </Container>
    );
  }
  return (
    <BannerStyle style={{ backgroundImage: `{url(${game.media.cover})` }}>
      <Container>
        <Tag size="big">Destaques do dia</Tag>
        <Titulo>{game?.name}</Titulo>
        <PrecoBanner>
          <s>{formatPrices(game?.prices.old)} </s>
          <span>{formatPrices(game?.prices.current)}</span>
        </PrecoBanner>
        <Button
          title="Clique aqui para aproveitar esta oferta"
          type={"link"}
          to={`/produto/${game?.id}`}
        >
          Aproveitar
        </Button>
      </Container>
    </BannerStyle>
  );
}
