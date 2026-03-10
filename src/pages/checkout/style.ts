import styled from "styled-components";
import { cores } from "../../globalStyle";

export const Row = styled.div`
    display: flex;
    column-gap: 24px;
`

export const InputGroup = styled.div`
    flex: auto;
    label{
        margin-bottom: 8px;
        display: block;
        font-size: 14px;
    }
    input{
        width: 100%;
        padding: 0 8px;
        height: 32px;
        background-color: ${cores.branca};
        border: 1px solid ${cores.branca};

    }
`
export const DivButton = styled.div`
    button{
        width: 189px;
    }
`