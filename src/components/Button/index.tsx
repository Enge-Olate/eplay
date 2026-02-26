import { ButtonBanner, ButtonLink } from "./style";
export type Props = {
  type: "button" | "link";
  title: string;
  to?: string;
  onClick?: () => void;
  children: string;
  variant?: "primary" | "secondary";
};
export default function Button({
  title,
  type,
  to,
  children,
  onClick,
  variant = 'primary',
}: Props) {
  if (type === "button") {
    return (
      <ButtonBanner variant={variant} type={type} title={title} onClick={onClick} >
        {children}
      </ButtonBanner>
    );
  }
  return (
    <ButtonLink title={title} to={to as string} type={type}>
      {children}
    </ButtonLink>
  );
}
