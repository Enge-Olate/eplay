import styled from "styled-components";
import { cores } from "../../globalStyle";
import { TagContainer } from "../Tag/style";
import { Link } from "react-router-dom";

export const Card = styled(Link)`
    background-color: ${cores.cinza};
    border-radius: 8px;
    padding: 8px;
    position: relative;
    display: block;
    color: ${cores.branca};
    ${TagContainer}{
        margin-right: 8px;
    }
    img{
        display: block;
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
    
`
export const Title = styled.h3`
    margin-top:16px;
    margin-bottom: 8px;
    display: block;
    font-size: 16px;
    font-weight: bold;
`
export const Description = styled.p`
    font-size: 14px;
    line-height: 22px;
    display: block;
    margin-top: 16px;
`
export const Infos = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;

`