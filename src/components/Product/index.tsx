import { Container } from "../../globalStyle";
import { Card, Description, Title } from "./style";
import residente from '../../assets/images/resident.png';
export default function Product() {
  return (
    <Container>
      <Card>
        <img src={residente} alt="Jogo Resident Evil" />
        <Title>Nome do jogo</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A corporis
          consectetur possimus maiores aliquid ex neque quas provident
          quibusdam. Reprehenderit dolores cum vitae nihil natus id hic!
          Provident, aliquam eius?
        </Description>
      </Card>
    </Container>
  );
}
