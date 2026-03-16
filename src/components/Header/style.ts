import styled from "styled-components";
import { breakPoints, cores } from "../../globalStyle";

export  const HeaderStyle = styled.header`
    width: 1024px;
    height: 76px;
    padding: 24px;
    margin-bottom: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${cores.cinza};
    border-radius: 16px;
    @media (max-width: ${breakPoints.desktop}) {
        width: 100%;
    }
    @media(max-width: ${breakPoints.tablet}){
            width: auto;
            height: auto;
            flex-direction: column;
        }
    div{
        display: flex;
        align-items: center;
        @media(max-width: ${breakPoints.tablet}){
            flex-direction: column;
        }
    }
    ul{
        display: flex;
        margin-left: 40px;
        @media(max-width: ${breakPoints.tablet}){
            margin: 4px auto;
        }
        @media(max-width: ${breakPoints.desktop}){
            margin: 8px;
            align-items: center;
        }
    }
    li{
        margin-right: 16px;
        font-weight: bold;
        @media(max-width: ${breakPoints.tablet}){
            margin-right: 8px;
            font-size: 12px;
        }
        @media(max-width: ${breakPoints.desktop}){
            margin-right: 8px;
            font-size: 14px;
        }
    }
    a{
        color: ${cores.branca};
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;
    }    
`
