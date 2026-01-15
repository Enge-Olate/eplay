import { Container } from "../../globalStyle";
import { Card, Description, Infos, Title } from "./style";
import { Tag } from "../Tag";
type Props = {
  title: string;
  category: string;
  system: string;
  description: string;
  image: string;
  infos: string[];
};
export default function Product({
  title,
  category,
  description,
  image,
  infos,
  system,
}: Props) {
  return (
    <Container>
      <Card>
        <img src={image} alt={title}/>
        <Infos>
          {
            infos.map((info)=>(
              <Tag key={info}>{info}</Tag>
            ))
          }
        </Infos>
        <Title>{title}</Title>
        <Tag>{category}</Tag>
        <Tag>{system}</Tag>
        <Description>
          {description}
        </Description>
      </Card>
    </Container>
  );
}
