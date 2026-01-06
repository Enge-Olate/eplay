import { ButtonBanner, ButtonLink } from "./style";
type Props = {
  type: "button" | "link"
  title: string
  to?: string
};
export default function Button({ title, type, to }: Props) {
  if (type === "button") {
   return (<ButtonBanner type={type} title={title}>Aproveitar</ButtonBanner>);
  }
  return(
    <ButtonLink title={title} to={ to as string}>
        Aproveitar
    </ButtonLink>
  );

  
}
