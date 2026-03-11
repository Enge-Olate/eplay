import { ButtonBanner, ButtonLink } from "./style";
export type Props = {
  type: 'button' | 'link' | 'submit';
  title: string;
  to?: string;
  onClick?: () => void;
  children: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
};
export default function Button({
  title,
  type,
  to,
  children,
  onClick,
  variant = "primary",
  disabled = false,
}: Props) {
  if (type !== "button" && type !== "submit") {
    return (
      <ButtonLink title={title} to={to as string}>
        {children}
      </ButtonLink>
    );
  }

  return (
    <ButtonBanner
      variant={variant}
      type={type}
      title={title}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonBanner>
  );
}
