import styled, {createGlobalStyle} from "styled-components";

export const cores ={
    branca: '#eee',
    preta: '#000',
    cinza: '#333',
    verde: '#10ac84',
    cinzClaro: '#a3a3a3'
}

export const RootGlobalStyle = createGlobalStyle`
    *, a{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: Roboto, sans-serif;
        text-decoration: none;
    }

    body{
        background-color: ${cores.preta};
        color: ${cores.branca};
        padding-top: 40px;
    }
    
`

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
        

`

// export default RootGlobalStyle;