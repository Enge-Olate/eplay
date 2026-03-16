 import { Container } from "../../globalStyle";
import { Tag } from "../Tag";
import { BannerStyle, PrecoBanner, Titulo } from "./style";
import { formatPrices } from "../../utils";
import { useGetGameQuery } from "../../services/api";
import { ButtonLink } from "../Button/style";
import Loader from "../Loaders";
export default function Banner() {
  const {data: game, isLoading}=  useGetGameQuery()

  if (!game || isLoading) {
    return (
      <Loader/>
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
