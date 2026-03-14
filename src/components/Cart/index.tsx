import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/appDispacth";
import { useAppSelector } from "../../hooks/appSelector";
import type { RootState } from "../../store";
import { close, remove } from "../../store/reducers/cart";
import { formatPrices, getTotalPrice } from "../../utils";
import Button from "../Button";
import { Tag } from "../Tag";
import { CartContainer, CartInfoPay, CartProduct, Overlay, Sidebar } from "./style";
export default function Cart() {
  const {isOpen, items} = useAppSelector((state: RootState)=> state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const closeCart = ()=>{
    dispatch(close());
  }
  const goTo = ()=>{
    if(items.length > 0){

      navigate("/checkout");
    }
    closeCart();
  }
  
  const removeGame = (id: number)=>{
    dispatch(remove(id));
    console.log("clicou!");
  };
  return (
    <CartContainer className={isOpen ? 'is-open': ''} >
      <Overlay onClick={()=> closeCart()}/>
      <Sidebar>
        <ul>
          {items.map((item)=>(
          <CartProduct key={item.id}>
            <img src={item.media.thumbnail} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <Tag>{item.details.category}</Tag>
              <Tag>{item.details.system}</Tag>
              <span>{formatPrices(item.prices.current)}</span>
            </div>
            <button onClick={()=> removeGame(item.id)} type="button"/>
          </CartProduct>
          ))}
        </ul>
        <CartInfoPay>
          <p>{items.length} jogo(s) no carrinho</p>
          <div>
            <p>Total de {formatPrices(getTotalPrice(items.filter(item=> item.prices.current)))}{' '}</p>
            <span>em até 6x sem juros</span>
          </div>
          <Button onClick={goTo} type="button" title="Clique aqui para continuar com a compra">
            Continuar com compra
          </Button>
        </CartInfoPay>
      </Sidebar>
    </CartContainer>
  );
}
