import { ContainerSection, Title } from "./style";
import { Container } from "../../globalStyle";
import type { JSX } from "react";

export type Props={
    title: string;
    background: 'black'|'gray';
    children: JSX.Element;
}
export default function Section({title, background, children}:Props) {
    return(
        <ContainerSection background={background}>
            <Container>
                <Title>
                    {title}
                </Title>
                {children}
            </Container>

        </ContainerSection>
    );
}