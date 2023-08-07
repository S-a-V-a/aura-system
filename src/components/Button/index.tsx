import React, { FC, HTMLAttributes, PropsWithChildren } from "react";
import { TSize } from "../../types/theme";
import Styled from "./styled";

type TButtonProps = {
  size?: TSize;
} & PropsWithChildren &
  HTMLAttributes<HTMLButtonElement>;

const Button: FC<TButtonProps> = ({ size = "primary", ...rest }) => {
  return <Styled.Button size={size} {...rest} />;
};

export default Button;
