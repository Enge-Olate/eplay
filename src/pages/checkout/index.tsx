import * as Yup from "yup";
import { useState } from "react";
import { useFormik } from "formik";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { Container } from "../../globalStyle";
import { DivButton, InputGroup, Row, TabButton } from "./style";
import barCode from "../../assets/barcode 1.png";
import creditCard from "../../assets/credit-card 1.png";
import Footer from "../../components/Footer";
export default function Checkout() {
  const [payWithCard, setPayWithCard] = useState(false);
  const message: string = "O campo é obrigatório!";
  const form = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      cpf: "",
      deliveryEmail: "",
      confirmEmail: "",
      namePersonCard: "",
      cpfCard: "",
      nameCard: "",
      numberCard: "",
      monthCard: "",
      yearCard: "",
      cvv: "",
      installments: 1,
    },

    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, "O nome precisa ter pelo menos 5 caracteres.")
        .required(message),
      email: Yup.string().email("E-mail inválido").required(message),
      cpf: Yup.string()
        .min(14, "O campo precisa ter 14 caracteres")
        .required(message),
      deliveryEmail: Yup.string()
        .email("Digite um e-mail válido!")
        .required(message),
      confirmEmail: Yup.string()
        .oneOf([Yup.ref("deliveryEmail"), "Os e-mails precisam ser iguais."])
        .required(message),
      namePersonCard: Yup.string().when((_values, schema) =>
        payWithCard ? schema.required(message) : schema,
      ),
      cpfCard: Yup.string().when((_values, schema) =>
        payWithCard ? schema.required(message) : schema,
      ),
      nameCard: Yup.string().when((_values, schema) =>
        payWithCard ? schema.required(message) : schema,
      ),
      numberCard: Yup.string().when((_values, schema) =>
        payWithCard ? schema.required(message) : schema,
      ),
      monthCard: Yup.string().when((_values, schema) =>
        payWithCard ? schema.required(message) : schema,
      ),
      yearCard: Yup.string().when((_values, schema) =>
        payWithCard ? schema.required(message) : schema,
      ),
      cvv: Yup.string().when((_values, schema) =>
        payWithCard ? schema.required(message) : schema,
      ),
      installments: Yup.string().when((_values, schema) =>
        payWithCard ? schema.required(message) : schema,
      ),

    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const getErrorMessage = (fieldname: string, message?: string)=>{
    const isTouched = fieldname in form.touched
    const isInvalid = fieldname in form.errors
    if(isTouched && isInvalid)return message;
    return ''
  }

  return (
    <>
      <form onSubmit={form.handleSubmit}>
        <Card title="Dados de cobrança">
          <>
            <Row>
              <InputGroup>
                <label htmlFor="fullName">Nome completo</label>
                <input
                  name="fullName"
                  id="fullName"
                  type="text"
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="email">E-mail</label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  value={form.values.email}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('email', form.errors.email)}</small>      
              </InputGroup>
              <InputGroup>
                <label htmlFor="cpf">CPF</label>
                <input
                  name="cpf"
                  id="cpf"
                  type="text"
                  value={form.values.cpf}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
              </InputGroup>
            </Row>
            <h3 className="margin-top">Dados de entrega-conteúdo digital</h3>
            <Row>
              <InputGroup>
                <label htmlFor="deliveryEmail">E-mail</label>
                <input
                  name="deliveryEmail"
                  id="deliveryEmail"
                  type="email"
                  value={form.values.deliveryEmail}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              <small>{getErrorMessage('deliveryEmail', form.errors.deliveryEmail)}</small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="comfirmEmail">Confirme o e-mail</label>
                <input
                  name="comfirmEmail"
                  id="comfirmEmail"
                  type="email"
                  value={form.values.confirmEmail}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              <small>{getErrorMessage('confirmEmail', form.errors.confirmEmail)}</small>
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
                      <label htmlFor="namePersonCard">
                        Nome do titular do cartão
                      </label>
                      <input
                        name="namePersonCard"
                        id="namePersonCard"
                        type="text"
                        value={form.values.namePersonCard}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    <small>{getErrorMessage('NamePersonCard ', form.errors.namePersonCard)}</small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cpfCard">CPF do titular do cartão</label>
                      <input
                        name="cpfCard"
                        type="text"
                        id="cpfCard"
                        value={form.values.cpfCard}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('cpfCard', form.errors.cpfCard)}</small>
                    </InputGroup>
                  </Row>
                  <Row marginTop="16px">
                    <InputGroup>
                      <label htmlFor="nameCard">Nome no cartão</label>
                      <input
                        name="nameCard"
                        value={form.values.nameCard}
                        type="text"
                        id="nameCard"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('nameCard', form.errors.nameCard)}</small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="numberCard">Número do cartão</label>
                      <input
                        name="numberCard"
                        value={form.values.numberCard}
                        type="text"
                        id="numberCard"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('numberCard', form.errors.numberCard)}</small>
                    </InputGroup>
                    <InputGroup maxwidth="140px">
                      <label htmlFor="monthCard">Mês do vencimento</label>
                      <input
                        name="monthCard"
                        value={form.values.monthCard}
                        type="month"
                        id="monthCard"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('monthCard', form.errors.monthCard)}</small>
                    </InputGroup>
                    <InputGroup maxwidth="140px">
                      <label htmlFor="yearCard">Ano de vencimento</label>
                      <input
                        name="yearCard"
                        value={form.values.yearCard}
                        type="year"
                        id="yearCard"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('yearCard', form.errors.yearCard)}</small>
                    </InputGroup>
                    <InputGroup maxwidth="48px">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        name="cvv"
                        value={form.values.cvv}
                        type="text"
                        id="cvv"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
                    </InputGroup>
                  </Row>
                  <Row marginTop="24px">
                    <InputGroup maxwidth="200px">
                      <label htmlFor="installments">Parcelamento</label>
                      <select
                        name="installments"
                        id="installments"
                        onChange={form.handleChange}
                        value={form.values.installments}
                        onBlur={form.handleBlur}
                      >
                        <option>1X 200.00</option>
                        <option>2X 200.00</option>
                        <option>3X 200.00</option>
                      </select>
                      <small>{getErrorMessage('installments', form.errors.installments)}</small>
                    </InputGroup>
                  </Row>
                </>
              ) : (
                <>
                  <p>
                    Ao optar por essa forma de pagamento, é importante lembrar
                    que a confirmação pode levar até 3 dias úteis, devido aos
                    prazos estabelecidos pelas instituições financeiras.
                    Portanto, a liberação do código de ativação do jogo
                    adquirido ocorrerá somente após a aprovação do pagamento do
                    boleto.
                  </p>
                </>
              )}
            </div>
          </>
        </Card>
        <Container>
          <DivButton>
            <Button
              title="Clique aqui para finalizar a compra"
              type="submit"
              onClick={form.handleSubmit}
            >
              Finalizar compra
            </Button>
          </DivButton>
        </Container>
      </form>
      <Footer />
    </>
  );
}
