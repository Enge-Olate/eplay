import { Container } from "../../globalStyle";
import Product from "../Product";
import { ContainerProductList, List, Title } from "./style";
import type { Game } from "../pages/home";
import { formatPrices, getDescription } from "../../utils";
export type Props = {
  background: "gray" | "black";
  title: string;
  games?: Game[];
  id?:string;
};

export default function ProductsList({id, title, background, games }: Props) {
  const getGameTags = (game: Game) => {
    const tags = [];
    if (game.release_date) {
      tags.push(game.release_date);
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount} % OFF`);
    }
    if (game.prices.current) {
      tags.push(formatPrices(game.prices.current));
    }
    return tags;
  };

  return (
    <ContainerProductList id={id} title={title} background={background} games={games}>
      <Container>
        <Title>{title}</Title>
        <List>
          {
            games && games.map((game)=>{
              return(
                <li key={game.id}>
                <Product
                  id={game.id}
                  category={game.details.category}
                  image={game.media.thumbnail}
                  infos={getGameTags(game)}
                  title={game.name}
                  system={game.details.system}
                  description={getDescription(game.description)}
                />
              </li>
              );
            })
          }
        </List>
      </Container>
    </ContainerProductList>
  );
}
