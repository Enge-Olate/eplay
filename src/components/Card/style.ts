import styled from "styled-components";
import { cores } from "../../globalStyle";

export const CardContainer = styled.div`
    padding: 24px;
    margin-bottom: 40px;
    border-radius: 8px;
    background-color: ${cores.cinza};

    h2, h3{
        margin-bottom: 24px;
        font-size: 18px;
        font-weight: bold;
        color: ${cores.branca}
    }
    .margin-top{
        margin-top: 24px;
    }
    p{
        font-size: 14px;
        line-height: 22px;
    }

`