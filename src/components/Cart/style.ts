import styled from "styled-components";
import { cores } from "../../globalStyle";
import { TagContainer } from "../Tag/style";
import excluir from "../../assets/images/fechar.png";

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top:0;
    left: 0;
    z-index: 1;
    background-color: rgba(0,0,0,.7);


`
export const Sidebar = styled.aside`
    padding: 40px 16px 0 16px;
    max-width: 360px;
    width: 100%;
    height: 100Vh;
    display: flex;
    flex-direction: column;
    background-color: ${cores.cinza};
    ul{
        max-width: 328px;
        width: 100vw;
    }
`
export const CartProduct=styled.li`
    padding: 8px 0;
    display: flex;
    position: relative;
    border-bottom: 1px solid ${cores.cinzClaro};
    img{
        margin-right: 23px;
        width: 80px;
        height: 80px;
        object-fit: cover;
    }
    ${TagContainer}{
        margin: 8px 8px 16px 0;
    }
    
    span{
        display: block;
    }
    button{
        width: 16px;
        height: 16px;
        background-image: url(${excluir});
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        border:none;
        top: 8px;
        right: 0;
        background-color: transparent;
    }

`
export const CartInfoPay = styled.div`
    margin-top: 32px;
    max-width: 328px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    p{
        font-weight: bold; 
    }
    span{
        font-size: 12px;
        font-weight: bold;
        color: ${cores.cinzClaro};
    }
    button{
        width: 100%;
    }
`