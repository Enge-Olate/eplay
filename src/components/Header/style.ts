import styled from "styled-components";
import { cores } from "../../globalStyle";

export  const HeaderStyle = styled.header`
    width: 1024px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${cores.cinza};
    padding: 24px;
    border-radius: 16px;
    div{
        display: flex;
        align-items: center;
    }
    ul{
        display: flex;
        margin-left: 40px;
    }
    li{
        margin-right: 16px;
        font-weight: bold;
    }
    a{
        color: ${cores.branca};
    }    
`
