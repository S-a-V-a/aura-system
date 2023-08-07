import React, { FC, PropsWithChildren } from "react";
import Styled from "./styled";
import { TTypographyColor } from "@/src/types/components/typography";
import { TFontSizeKeys } from "@/src/types/theme/fontSize";
import { TBrightness } from "@/src/types/theme";

type TTypographyProps = {
  color?: TTypographyColor;
  size?: TFontSizeKeys;
  brightness?: TBrightness;
} & PropsWithChildren;

const Typography: FC<TTypographyProps> = ({
  color = "base",
  size = "sm",
  brightness = 700,
  ...rest
}) => {
  return (
    <Styled.Typography
      color={color}
      size={size}
      brightness={brightness}
      {...rest}
    />
  );
};

export default Typography;
