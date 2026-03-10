import type { JSX } from "react/jsx-runtime";
import { Container } from "../../globalStyle";
import { CardContainer } from "./style";

type Props={
    children: JSX.Element;
    title: string;
}
export default function Card({children, title}: Props){
    return(
        <Container>
            <CardContainer>
                <h2>{title}</h2>
                {children}
            </CardContainer>
        </Container>
    );
}