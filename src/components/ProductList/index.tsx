import { Container } from "../../globalStyle";
import Product from "../Product";
import { ContainerProductList, List, Title } from "./style";
import resident from "../../assets/resident.png";
import type { Game } from "../pages/home";
export type Props = {
  background: "gray" | "black";
  title: string;
  games: Game[]
};
export default function ProductsList({ title, background, games }: Props) {
  return (
    <ContainerProductList title={title} background={background} games={games}>
      <Container>
        <Title>{title}</Title>
        <List>
          <Product
            category="Ação"
            description="teste"
            image={resident}
            infos={["-10%", "R$ 150"]}
            title="Resident Evil"
            system="Windows"
          />
          <Product
            category="Ação"
            description="teste"
            image={resident}
            infos={["-10%", "R$ 150"]}
            title="Resident Evil"
            system="Windows"
          />
          <Product
            category="Ação"
            description="teste"
            image={resident}
            infos={["-10%", "R$ 150"]}
            title="Resident Evil"
            system="Windows"
          />
          <Product
            category="Ação"
            description="teste"
            image={resident}
            infos={["-10%", "R$ 150"]}
            title="Resident Evil"
            system="Windows"
          />
        </List>
      </Container>
    </ContainerProductList>
  );
}
