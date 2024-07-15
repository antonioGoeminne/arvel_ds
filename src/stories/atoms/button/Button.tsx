import * as Styled from "./Button.styled";
import { Props } from "./Button.types";

export const Button: React.FC<Props> = ({
  variant = "primary",
  label,
  textColor,
  onClick,
}) => {
  return (
    <Styled.Button onClick={onClick} variant={variant}>
      <Styled.Label textColor={textColor}>{label}</Styled.Label>
    </Styled.Button>
  );
};
