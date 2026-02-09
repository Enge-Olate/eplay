import Hogwarts from "../../assets/images/fundo_hogwarts.png";
import { Container } from "../../globalStyle";
import Button from "../Button";
import { Tag } from "../Tag";
import { BannerHero, Infos } from "./style";

export default function Hero() {
  return (
    <BannerHero style={{ backgroundImage: `url(${Hogwarts})` }}>
      <Container>
        <div className="container">
          <div>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
          </div>
          <Infos>
            <h2>Hogwarts Legacy</h2>
            <p>
              <span> De R$ 250,00 </span>
              Por R$ 190,00
            </p>
            <Button
              type="button"
              variant="primary"
              title="Clique aqui para adicionar este jogo ao carrinho."
            >
              Adicionar ao carrinho
            </Button>
          </Infos>
        </div>
      </Container>
    </BannerHero>
  );
}
