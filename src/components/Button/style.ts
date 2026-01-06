import styled from "styled-components";
import { Link } from "react-router-dom";
import { cores } from "../../globalStyle";

export const ButtonBanner = styled.button`
    width: 110px;
    height: 35px;
    padding: 8px 16px;
    border-radius: 8px;
    border: 2px solid ${cores.branca};
    position: absolute;
    top: 461px;
    left: 1097px;
    background-color: transparent;
    color: ${cores.branca};
    font-size: 16px;
    font-weight: bold;
`
export const ButtonLink = styled(Link)`
    width: 110px;
    height: 35px;
    padding: 8px 16px;
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

`