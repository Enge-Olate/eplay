import { Container } from "../../globalStyle";
import Product from "../Product";
import { ContainerProductList, List, Title } from "./style";
import resident from "../../assets/resident.png";
export type Props = {
  background: "gray" | "black";
  title: string;
};
export default function ProductsList({ title, background }: Props) {
  return (
    <ContainerProductList title={title} background={background}>
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
