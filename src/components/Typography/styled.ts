import { TTypographyColor } from "@/src/types/components/typography";
import { TBrightness } from "@/src/types/theme";
import { TFontSizeKeys } from "@/src/types/theme/fontSize";
import { DefaultTheme, styled } from "styled-components";

const getColorStyles = (
  color: TTypographyColor,
  theme: DefaultTheme,
  brightness: TBrightness
) => {
  if (color === "base") {
    return theme.colors.hex.base.black;
  }

  return theme.colors.hex[color][brightness];
};

const Typography = styled("span")<{
  color: TTypographyColor;
  size: TFontSizeKeys;
  brightness: TBrightness;
}>`
  color: ${({ color, theme, brightness }) =>
    getColorStyles(color, theme, brightness)};

  font-size: ${({ theme, size }) => theme.fontSize[size]};
`;

const Styled = { Typography };

export default Styled;
