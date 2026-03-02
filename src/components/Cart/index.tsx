import Button from "../Button";
import { Tag } from "../Tag";
import { CartInfoPay, CartProduct, Overlay, Sidebar } from "./style";
export default function Cart() {
  return (
    <Overlay>
      <Sidebar>
        <ul>
          <CartProduct>
            <img src="https://placehold.co/80x80" alt="" />
            <button type="button"></button>
            <div>
              <h3>name</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 190,90</span>
            </div>
          </CartProduct>
          <CartProduct>
            <img src="https://placehold.co/80x80" alt="" />
            <button type="button"></button>
            <div>
              <h3>name</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 190,90</span>
            </div>
          </CartProduct>
          <CartProduct>
            <img src="https://placehold.co/80x80" alt="" />
            <button type="button"></button>
            <div>
              <h3>name</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 190,90</span>
            </div>
          </CartProduct>
          <CartProduct>
            <img src="https://placehold.co/80x80" alt="" />
            <button type="button"></button>
            <div>
              <h3>name</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 190,90</span>
            </div>
          </CartProduct>
        </ul>
        <CartInfoPay>
          <p>2 jogo(s) no carrinho</p>
          <div>
            <p>Total de R$ 381,80 </p>
            <span>em até 6x sem juros</span>
          </div>
          <Button type="button" title="Clique aqui para continuar com a compra">
            Continuar com compra
          </Button>
        </CartInfoPay>
      </Sidebar>
    </Overlay>
  );
}
