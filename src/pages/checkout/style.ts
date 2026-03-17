import styled from "styled-components";
import { breakPoints, cores } from "../../globalStyle";
type TabButton={
    isActive?: boolean;
}
type RowProps={
    marginTop?:string;
}   
type InpuGroupProps={
    maxwidth?: string;

}
export const Row = styled.div<RowProps>`
    display: flex;
    align-items: flex-end;
    column-gap: 24px;
    margin-top: ${(props)=> props.marginTop || '0'};
    @media(max-width: ${breakPoints.tablet}){
        display: block;
        
    }
`

export const InputGroup = styled.div<InpuGroupProps>`
    flex: auto;
    max-width: ${(props)=> props.maxwidth || 'auto'};
    label{
        margin-bottom: 8px;
        display: block;
        font-size: 14px;
    }
    input, select{
        width: 100%;
        padding: 0 8px;
        height: 32px;
        background-color: ${cores.branca};
        border: 1px solid ${cores.branca};
        &.error{
            border: 1px solid ${cores.bordaErro};
        }
    }
    @media(max-width: ${breakPoints.tablet}){
        margin-top: 16px;
    }
`
export const DivButton = styled.div`
    button{
        margin-bottom: 40px;
        width: 189px;
    }
`
export const TabButton = styled.button<TabButton>`
    padding: 0 8px;
    margin-right: 16px;
    height: 32px;
    font-size: 14px;
    font-weight: bold;
    color: ${cores.branca};
    border:none;
    border-radius: 8px;
    background-color: ${(props)=>(props.isActive? cores.verde: cores.preta)};
    cursor: pointer;
    img{
        margin-right: 8px;
    }
    @media(max-width: ${breakPoints.tablet}){
        width: 100%;
        margin-bottom: 8px;
    }

`