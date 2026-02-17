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
  id: number;
};
export default function Product({
  title,
  category,
  description,
  image,
  infos,
  system,
  id,
}: Props) {
  const getDescription = (text:string)=>{
    if(text.length > 95){
      return text.slice(0, 92)+'...';
    }
    return text;
  };
  return (
    <Container>
      <Card to={`/produto/${id}`}>
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
          {getDescription(description)}
        </Description>
      </Card>
    </Container>
  );
}
