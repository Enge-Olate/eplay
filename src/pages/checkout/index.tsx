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
import { usePurchaseMutation } from "../../services/api";
export default function Checkout() {
  const [payWithCard, setPayWithCard] = useState(false);
  const [purchase, { data, isSuccess }] = usePurchaseMutation();
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
        .oneOf([Yup.ref("deliveryEmail"), ""], "As senhas devem ser iguais.")
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
      purchase({
        billing: {
          name: values.fullName,
          email: values.email,
          document: values.cpf,
        },
        delivery: { email: values.email },
        payment: {
          card: {
            active: false,
            name: values.nameCard,
            number: values.numberCard,
            code: values.cvv,
            experies: {
              month: values.monthCard,
              year: values.yearCard,
            },
          },
          installments: values.installments,
        },
        products: [
          {
            id: 1,
            price: 200,
          },
        ],
      });
    },
  });

  const getErrorMessage = (fieldname: string, message?: string) => {
    const isTouched = fieldname in form.touched;
    const isInvalid = fieldname in form.errors;
    if (isTouched && isInvalid) return message;
    return "";
  };

  return (
    <>
      {isSuccess ? (
        <Card title="Muito Obrigado!">
          <>
            <p>
              É com satisfação que informamos que recebemos seu pedido com
              sucesso! Abaixo estão os detalhes da sua compra: Número do pedido:
              {data.orderId} Forma de pagamento:
              {payWithCard ? "Cartão de crédito" : "Boleto bancário"}
            </p>
            <p className="margin-top">
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pode levar até 3 dias úteis. Após a aprovação do
              pagamento, enviaremos um e-mail contendo o código de ativação do
              jogo.
            </p>
            <p className="margin-top">
              Se você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. Você receberá o código no e-mail cadastrado
              em nossa loja.
            </p>
            <p className="margin-top">
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação. Caso tenha alguma dúvida ou
              necessite de mais informações, por favor, entre em contato conosco
              através dos nossos canais de atendimento ao cliente.
            </p>
            <p className="margin-top">
              Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
              jogo!
            </p>
          </>
        </Card>
      ) : (
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
                  <small>
                    {getErrorMessage("fullName", form.errors.fullName)}
                  </small>
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
                  <small>{getErrorMessage("email", form.errors.email)}</small>
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
                  <small>{getErrorMessage("cpf", form.errors.cpf)}</small>
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
                  <small>
                    {getErrorMessage(
                      "deliveryEmail",
                      form.errors.deliveryEmail,
                    )}
                  </small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="confirmEmail">Confirme o e-mail</label>
                  <input
                    name="confirmEmail"
                    id="confirmEmail"
                    type="email"
                    value={form.values.confirmEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage("confirmEmail", form.errors.confirmEmail)}
                  </small>
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
                        <small>
                          {getErrorMessage(
                            "NamePersonCard ",
                            form.errors.namePersonCard,
                          )}
                        </small>
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="cpfCard">
                          CPF do titular do cartão
                        </label>
                        <input
                          name="cpfCard"
                          type="text"
                          id="cpfCard"
                          value={form.values.cpfCard}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage("cpfCard", form.errors.cpfCard)}
                        </small>
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
                        <small>
                          {getErrorMessage("nameCard", form.errors.nameCard)}
                        </small>
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
                        <small>
                          {getErrorMessage(
                            "numberCard",
                            form.errors.numberCard,
                          )}
                        </small>
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
                        <small>
                          {getErrorMessage("monthCard", form.errors.monthCard)}
                        </small>
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
                        <small>
                          {getErrorMessage("yearCard", form.errors.yearCard)}
                        </small>
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
                        <small>{getErrorMessage("cvv", form.errors.cvv)}</small>
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
                        <small>
                          {getErrorMessage(
                            "installments",
                            form.errors.installments,
                          )}
                        </small>
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
                      adquirido ocorrerá somente após a aprovação do pagamento
                      do boleto.
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
      )}

      <Footer />
    </>
  );
}
