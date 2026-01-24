import styled from "styled-components";
import { cores } from "../../globalStyle";
interface widthDiv{
    variant?: 'large' | 'small' | 'custom';
    widthValue?: string;
}

function handleWidth(variant: string | undefined, widthValue?: string){
    switch (variant){
        case 'small': return '213px';
        case 'large': return '375px';
        case 'custom': return widthValue || '100%';
        default: return '500px'; 
    }
}

export const FooterStyle = styled.footer`
    padding: 32px 0;
    height: 326px;
    background-color: ${cores.cinza};
    p{
        margin-top: 80px;
    }
`
export const StackDivs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;

`

export const DivSection = styled.div<widthDiv>`
    width: ${(props) => handleWidth(props.variant, props.widthValue)};
    height: 51px;
    h4{
        font-weight: 700;
        margin-bottom: 16px;
    }
    ul{
        display: flex;
    }
    li{
        margin-right: 8px;
        color: ${cores.cinzClaro};
    }

`
