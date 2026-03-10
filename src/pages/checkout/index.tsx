import { useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { Container } from "../../globalStyle";
import { DivButton, InputGroup, Row, TabButton } from "./style";
import barCode from "../../assets/barcode 1.png";
import creditCard from "../../assets/credit-card 1.png";
import Footer from "../../components/Footer";
export default function Checkout() {
  const [payWithCard, setPayWithCard] = useState(false);
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
        <>
          <TabButton
            onClick={() => setPayWithCard(false)}
            isActive={!payWithCard}
          >
            <img src={barCode} alt="Boleto" />
            Boleto bancario
          </TabButton>
          <TabButton
            onClick={() => setPayWithCard(true)}
            isActive={payWithCard}
          >
            <img src={creditCard} alt="Cartão de credito" />
            Cartão de crédito
          </TabButton>
          <div className="margin-top">
            {payWithCard ? (
              <>
                <Row>
                  <InputGroup>
                    <label htmlFor="name_person_card">
                      Nome do titular do cartão
                    </label>
                    <input id="name_person_card" type="text" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpf_card">CPF do titular do cartão</label>
                    <input type="text" id="cpf_card" />
                  </InputGroup>
                </Row>
                <Row marginTop="16px">
                  <InputGroup>
                    <label htmlFor="name_card">Nome no cartão</label>
                    <input type="text" id="name_card" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="number_card">Número do cartão</label>
                    <input type="text" id="number_card" />
                  </InputGroup>
                  <InputGroup maxwidth="140px">
                    <label htmlFor="month_card">Mês do vencimento</label>
                    <input type="month" id="month_card" />
                  </InputGroup>
                  <InputGroup maxwidth="140px">
                    <label htmlFor="year_card">Ano de vencimento</label>
                    <input type="year" id="year_card" />
                  </InputGroup>
                  <InputGroup maxwidth="48px">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" />
                  </InputGroup>
                </Row>
              </>
            ) : (
              <>
                <p>
                  Ao optar por essa forma de pagamento, é importante lembrar que
                  a confirmação pode levar até 3 dias úteis, devido aos prazos
                  estabelecidos pelas instituições financeiras. Portanto, a
                  liberação do código de ativação do jogo adquirido ocorrerá
                  somente após a aprovação do pagamento do boleto.
                </p>
              </>
            )}
          </div>
        </>
      </Card>
      <Container>
        <DivButton>
          <Button title="Clique aqui para finalizar a compra" type="button">
            Finalizar compra
          </Button>
        </DivButton>
      </Container>
      <Footer/>
    </>
  );
}
