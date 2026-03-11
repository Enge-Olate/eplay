 import { Container } from "../../globalStyle";
import { Tag } from "../Tag";
import { BannerStyle, PrecoBanner, Titulo } from "./style";
import { formatPrices } from "../../utils";
import { useGetGameQuery } from "../../services/api";
import { ButtonLink } from "../Button/style";
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
          <s>De {formatPrices(game.prices.old)} </s>
          <span>por apenas {formatPrices(game.prices.current)}</span>
        </PrecoBanner>
        <ButtonLink
          title="Clique aqui para aproveitar esta oferta"
          type="link"
          to={`/produto/${game.id}`}
        >
          Aproveitar
        </ButtonLink>
      </Container>
    </BannerStyle>
  );
}
