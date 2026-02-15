import styled from "styled-components";
import { cores } from "../../globalStyle";

export const Items = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, .1fr);
    column-gap: 16px;
    
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
    > img{
        width: 100%;
        height: 100%;
        border: 2px solid ${cores.branca};
        border-radius: 8px;
        object-fit: cover;
    }
    &:hover{
        ${Action}{
            opacity: 1;
            transition: opacity 0.5s ease;
        }
    }
`
