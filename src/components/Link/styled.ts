import { TLinkColorsKeys } from "@/src/types/components/link";
import { TSize, TVariant } from "@/src/types/theme";
import RootLink from "next/link";
import { DefaultTheme, styled } from "styled-components";

const getSizeStyles = (size: TSize) => {
  switch (size) {
    case "primary":
      return `
                  padding: 14px 28px;
                  
                  font-size: 18px;
              `;
    case "small":
      return `
                  padding: 12px 20px;
  
                  font-size: 14px;
              `;
  }
};

const getVariantStyles = (
  theme: DefaultTheme,
  variant: TVariant,
  color?: TLinkColorsKeys
) => {
  switch (variant) {
    case "contained":
      return `
        color: ${theme.colors.hex.base.white};

        background: ${
          color
            ? theme.colors.hex[color][700]
            : theme.colors.gradient.primary.root
        };

        &:hover {
          background: ${
            color
              ? theme.colors.hex[color][700]
              : theme.colors.gradient.primary.hover
          };
        }

        &[aria-disabled="true"] {
          background: ${
            color
              ? theme.colors.hex[color][700]
              : theme.colors.gradient.primary.disabled
          };
        }
      `;
    case "outlined":
      return "";
    case "text":
      return `
        color: ${
          color ? theme.colors.hex[color][700] : theme.colors.hex.base.black
        };
        background-color: transparent;

        box-shadow: none;

        padding: 0;
      `;
  }
};

const Link = styled(RootLink)<{
  size: TSize;
  variant: TVariant;
  color?: TLinkColorsKeys;
}>`
  width: fit-content;

  border: none;
  border-radius: 50px;

  box-shadow: inset 0px -2px 4px 0px rgba(0, 0, 0, 0.1),
    inset 0px 2px 12px 0px rgba(255, 255, 255, 0.2),
    inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1);

  text-decoration: none;

  ${({ size }) => getSizeStyles(size)};
  ${({ variant, theme, color }) => getVariantStyles(theme, variant, color)};
`;

const Styled = { Link };

export default Styled;
