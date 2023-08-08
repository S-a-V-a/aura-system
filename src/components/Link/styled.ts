import { TSize, TVariant } from '@/src/types/theme';
import { TFontSizeKeys } from '@/src/types/theme/fontSize';
import RootLink from 'next/link';
import { DefaultTheme, styled } from 'styled-components';

const getSizeStyles = (size: TFontSizeKeys, theme: DefaultTheme) => {
  let type: TSize = 'primary';

  let styles = `font-size: ${theme.fontSize[size]};`;

  if (size === 'xs' || size === 'sm' || size === 'md') {
    type = 'small';
  }

  switch (type) {
    case 'primary':
      styles += 'padding: 18px 28px;';
      break;
    case 'small':
      styles += 'padding: 15px 20px;';
      break;
  }

  return styles;
};

const getVariantStyles = (theme: DefaultTheme, variant: TVariant, color: string) => {
  if (variant === 'contained') {
    return `
      background: ${color};
      color: ${theme.colors.hex.base.white};
    `;
  }

  return `
      color: ${color};

      box-shadow: none;

      padding: 0;
    `;
};

const Link = styled(RootLink)<{
  size: TFontSizeKeys;
  variant: TVariant;
  color: string;
}>`
  width: fit-content;

  border: none;
  border-radius: 50px;

  box-shadow:
    inset 0px -2px 4px 0px rgba(0, 0, 0, 0.1),
    inset 0px 2px 12px 0px rgba(255, 255, 255, 0.2),
    inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1);

  text-decoration: none;

  ${({ size, theme }) => getSizeStyles(size, theme)};
  ${({ variant, theme, color }) => getVariantStyles(theme, variant, color)};
`;

const Styled = { Link };

export default Styled;
