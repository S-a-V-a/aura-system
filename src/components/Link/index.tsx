import React, { FC, PropsWithChildren } from "react";
import Styled from "./styled";
import { LinkProps as RootProps } from "next/link";
import { TSize, TVariant } from "@/src/types/theme";
import { TLinkColorsKeys } from "@/src/types/components/link";

type TLinkProps = {
  size?: TSize;
  disabled?: boolean;
  variant?: TVariant;
  color?: TLinkColorsKeys;
} & PropsWithChildren &
  RootProps;

const Link: FC<TLinkProps> = ({
  variant = "contained",
  size = "primary",
  disabled = false,
  color,
  ...rest
}) => {
  return (
    <Styled.Link
      size={size}
      variant={variant}
      aria-disabled={disabled}
      color={color}
      {...rest}
    />
  );
};

export default Link;
