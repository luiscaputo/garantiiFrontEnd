import { ReactNode, ButtonHTMLAttributes } from "react";
import { Btn } from "./styles";

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  primary?: boolean | undefined
};

export function Button({ children, primary, ...rest }: IButtonProps) {
  return <Btn {...rest}>{children}</Btn>;
}
