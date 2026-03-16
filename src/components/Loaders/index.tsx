import {PacmanLoader} from "react-spinners";
import { Container, cores } from "../../globalStyle";
import { ContainerLoader } from "./style";
import Footer from "../Footer";

export default function Loader(){
    return(
        <>
        <Container>
            <ContainerLoader>
                <PacmanLoader color={cores.branca} speedMultiplier={1}/>
            </ContainerLoader>
        </Container>
        <Footer/>       
        </>
    );
}