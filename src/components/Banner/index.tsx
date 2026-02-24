 import { Container } from "../../globalStyle";
import Button from "../Button";
import { Tag } from "../Tag";
import { BannerStyle, PrecoBanner, Titulo } from "./style";
import { formatPrices } from "../../utils";
import { useGetGameQuery } from "../../services/api";
export default function Banner() {
  const {data: game}=  useGetGameQuery()

  if (!game) {
    return (
      <Container>
        <h4>Carregando...</h4>
      </Container>
    );
  }
  return (
    <BannerStyle style={{backgroundImage:`url(${game.media.cover})`}}>
      <Container style={{zIndex:'1',position:"relative"}}>
        <Tag size="big">Destaques do dia</Tag>
        <Titulo>{game.name}</Titulo>
        <PrecoBanner>
          <s>{formatPrices(game.prices.old)} </s>
          <span>{formatPrices(game.prices.current)}</span>
        </PrecoBanner>
        <Button
          title="Clique aqui para aproveitar esta oferta"
          type={"link"}
          to={`/produto/${game.id}`}
        >
          Aproveitar
        </Button>
      </Container>
    </BannerStyle>
  );
}
