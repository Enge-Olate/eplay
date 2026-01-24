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
            <li>Ação</li>
            <li>Ação</li>
            <li>Ação</li>
            <li>Ação</li>
            <li>Ação</li>
            <li>Ação</li>
            <li>Ação</li>
            <li>Ação</li>
          </ul>
        </DivSection>
        <DivSection variant="small">
          <h4>Acesso rápido</h4>
          <ul>
            <li>Ação</li>
            <li>Ação</li>
            <li>Ação</li>
          </ul>
        </DivSection>
        </StackDivs>
        <p>{actualYear.getFullYear()} - © E-PLAY Todos os direitos reservados</p>
      </Container>
    </FooterStyle>
  );
}
