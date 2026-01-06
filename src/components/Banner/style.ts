import styled from "styled-components";
import banner from '../../assets/images/banner-homem-aranha.png';


export const BannerStyle = styled.div`
    width: 100%;
    height: 600px;
    display: block;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

`
export const Titulo = styled.h2`
    width: 449px;
    height: 84px;
    font-weight: bold;
    font-size: 36px;
    position: absolute;
    top: 340px;
`
export const PrecoBanner = styled.p`
    width:232px;
    height: 56px;
    margin-top: 24px;
    font-size: 24px;
    font-weight: bold;
    position: absolute;
    top: 424px;

`