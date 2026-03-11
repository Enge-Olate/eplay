import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakPoints, cores } from "../../globalStyle";
import type{Props} from ".";
export const ButtonBanner = styled.button<Props>`
    width: 110px;
    height: 35px;
    padding: 8px 16px;
    border-radius: 8px;
    border: 2px solid ${(props)=> props.variant === "primary"? cores.verde: 'transparent'};
    top: 461px;
    left: 1097px;
    background-color: ${(props)=> props.variant === "primary"? cores.verde: cores.branca};
    color: ${cores.branca};
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    
`
export const ButtonLink = styled(Link)`
    width: 110px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 2px solid ${cores.branca};
    position: absolute;
    top: 461px;
    left: 1097px;
    background-color: transparent;
    color: ${cores.branca};
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;

    @media(max-width: ${breakPoints.desktop}){
        top: 520px;
        left: 0;
    }

`