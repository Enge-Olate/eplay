import styled from "styled-components";
import { TagContainer } from "../Tag/style";
import { breakPoints } from "../../globalStyle";


export const BannerStyle = styled.div`
    width: 100%;
    height: 600px;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    ${TagContainer}{
        position: absolute;
        top: 32px;
    }
    &::after{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
        left: 0;
        background-color: rgba(0,0,0,.7);
    }
    @media(max-width: ${breakPoints.tablet}){
        background-size: cover;
    }
`
export const Titulo = styled.h2`
    width: 449px;
    height: 84px;
    font-weight: bold;
    font-size: 36px;
    position: absolute;
    top: 340px;
    @media(max-width :${breakPoints.tablet}){
        width: auto;
    }
`
export const PrecoBanner = styled.div`
    width: fit-content;
    height: 56px;
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    font-size: 24px;
    font-weight: bold;
    position: absolute;
    line-height: 100%;
    top: 424px;
    s{
        text-decoration: line-through;
        opacity: .7;
    }
    

`