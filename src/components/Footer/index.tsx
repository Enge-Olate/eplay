import { Container } from "../../globalStyle";
import { FooterStyle, DivSection, StackDivs } from "./style";
const actualYear = new Date();
export default function Footer() {
  return (
    <FooterStyle>
      <Container>
        <StackDivs>
          <DivSection variant="large">
          <h4>Categorias</h4>
          <ul>
            <li><a href="#RPF">RPG</a></li>
            <li><a href="#Ação">Ação</a></li>
            <li><a href="#Aventura">Aventura</a></li>
            <li><a href="#Esportes">Esportes</a></li>
            <li><a href="#Simulação">Simulação</a></li>
            <li><a href="#Estratégia">Estratégia</a></li>
            <li><a href="#FPS">FPS</a></li>
          </ul>
        </DivSection>
        <DivSection variant="small">
          <h4>Acesso rápido</h4>
          <ul>
            <li><a href="#Novidades">Novidades</a></li>
            <li><a href="#Promoções">Promoções</a></li>
            <li><a href="#Em breve">Em breve</a></li>
            
          </ul>
        </DivSection>
        </StackDivs>
        <p>{actualYear.getFullYear()} - © E-PLAY Todos os direitos reservados</p>
      </Container>
    </FooterStyle>
  );
}
