import Button from "../../components/Button";
import Card from "../../components/Card";
import { Container } from "../../globalStyle";
import { DivButton, InputGroup, Row } from "./style";

export default function Checkout() {
  return (
    <>
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="full_name">Nome completo</label>
              <input id="full_name" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" />
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega-conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="delivery_email">E-mail</label>
              <input id="delivery_email" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirm_email">Confirme o e-mail</label>
              <input id="confirm_email" type="email" />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <div>
          <p>
            Ao optar por essa forma de pagamento, é importante lembrar que a
            confirmação pode levar até 3 dias úteis, devido aos prazos
            estabelecidos pelas instituições financeiras. Portanto, a liberação
            do código de ativação do jogo adquirido ocorrerá somente após a
            aprovação do pagamento do boleto.
          </p>
        </div>
      </Card>
      <Container>
        <DivButton>
          <Button title="Clique aqui para finalizar a compra" type="button">
            Finalizar compra
          </Button>
        </DivButton>
      </Container>
    </>
  );
}
