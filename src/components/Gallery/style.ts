import styled from "styled-components";
import { breakPoints, cores } from "../../globalStyle";

export const Items = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, .1fr);
    column-gap: 16px;
    @media(max-width: ${breakPoints.tablet}){
        grid-template-columns: repeat(2, .1fr);
        gap: 16px;
        
    }
    
`
export const Action= styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.75);
    opacity: 0;
    transition: opacity 0.5s ease;
    cursor: pointer;
`
export const Item = styled.li`
    width: 150px;
    height: 150px;
    position: relative;
    @media(max-width: ${breakPoints.tablet}){
        width: 145px;
        height: 145px;
    }
    > img{
        width: 100%;
        height: 100%;
        border: 2px solid ${cores.branca};
        border-radius: 8px;
        object-fit: cover;
        @media(max-width: ${breakPoints.tablet}){
            width: 100%;

        }
    }
    &:hover{
        ${Action}{
            opacity: 1;
            transition: opacity 0.5s ease;
        }
    }

`
export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 1;
    &.visible{
        display: flex;
        
    }
    
    .overlay{
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.75);
    }

`
export const ModalContent = styled.div`
    max-width: 960px;
    position: relative;
    z-index: 1;
    @media(max-width: ${breakPoints.tablet}){
        max-width: 300px;
        width: 100%;
    }
    header{
        margin-bottom: 34px;
        display: flex;
        justify-content: space-between;
        
    }
    h4{
        font-weight: bold;
        font-size: 18px;
    }
    img{
        cursor: pointer;
        
    }
    >img, iframe{
        display: block;
        max-width: 100%;
        width: 100%;
        
    }
    iframe{
        width: 100%;
        height: 480px;
    }

`