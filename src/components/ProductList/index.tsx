import { Container } from "../../globalStyle";
import Product from "../Product";
import { ContainerProductList, List, Title } from "./style";
type Props = {
    background: 'gray' | 'black';
    title: string;
}
export default function ProductsList({title}: Props){
    return(
        <Container>
            <ContainerProductList title={title} >
                <Title>Promoções</Title>
                <List>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </List>
            </ContainerProductList>
        </Container>
    );
}