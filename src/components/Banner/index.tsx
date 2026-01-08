import { Container } from "../../globalStyle";
import Button from "../Button";
import { Tag } from "../Tag";
import { BannerStyle, PrecoBanner, Titulo } from "./style";

export default function Banner(){
    return(
        <BannerStyle>
            <Container>
                <Tag size="big">Destaques do dia</Tag>
            <Titulo>Marvel's Spider-Man: Miles Morales PS4 & PS5</Titulo>
            <PrecoBanner>
                <s>De R$ 250,00 </s>
                <span>por apenas R$ 99.90</span>
            </PrecoBanner>
            <Button to="/produto"  title="Clique aqui para aproveitar esta oferta" type={'link'}/>
            </Container>
        </BannerStyle>
    );
}