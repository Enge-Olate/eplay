import styled from "styled-components";
import { cores } from "../../globalStyle";

export const TagContainer = styled.div`
    width: 148px;
    height: 35px;
    padding: 8px;
    border-radius: 8px;
    background-color: ${cores.verde};
    position: absolute;
    top: 40px;

    p{
        text-align: center;
        font-weight: bold;
    }
`
