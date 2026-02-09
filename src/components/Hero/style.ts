import styled from "styled-components";
import { TagContainer } from "../Tag/style";
import { cores } from "../../globalStyle";

export const BannerHero = styled.div`
    position: relative;
    display: block;
    height: 480px;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    padding-top: 16px;

    &::after {
    content: '';
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    opacity: 0.56;
    left: 0;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
  .container {
    z-index: 1;
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

  }

`
export const Infos = styled.div`
  padding: 16px;
  background-color: ${cores.preta};
  max-width: 290px;
  font-weight: bold;
  
  h2 {
    font-size: 32px;
  }  
  
  p {
    font-size: 18px;
    margin: 16px 0;
    span {
    display: block;
    text-decoration: line-through;
    }
  }
  button{
    padding: 8px;
    width: 189px;
    height: 35px;
  }
`