import { TSize, TType, TVariant } from '@/src/types/theme';
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
      styles += 'padding: 14px 28px;';
      break;
    case 'small':
      styles += 'padding: 12px 20px;';
      break;
  }

  return styles;
};

const getTypeStyles = (theme: DefaultTheme, type: TType) => {
  switch (type) {
    case 'primary':
      return `
            box-shadow: inset 0px -2px 4px 0px rgba(0, 0, 0, 0.1),
              inset 0px 2px 12px 0px rgba(255, 255, 255, 0.2), inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
            background: ${theme.colors.gradient.primary.root};
            color: ${theme.colors.hex.base.white};

            &[aria-disable='true'] {
              background: ${theme.colors.gradient.primary.disabled};
            }

            &:hover {
              background: ${theme.colors.gradient.primary.hover};
            }
          `;
    case 'secondary':
      return `
            background: ${theme.colors.rgba.gray[4]};
            color: ${theme.colors.hex.base.black};

            &[aria-disable='true'] {
              background: ${theme.colors.rgba.gray[3]};
            }

            &:hover {
              background: ${theme.colors.rgba.gray[3]};
            }
      `;
    case 'text':
      return `
        color: ${theme.colors.hex.base.black};

        padding: 0;
      `;
    default:
      return '';
  }
};

const Link = styled(RootLink)<{
  size: TFontSizeKeys;
  type: TType;
}>`
  display: block;

  width: fit-content;

  border: none;
  border-radius: 50px;

  text-decoration: none;
  text-align: center;

  ${({ size, theme }) => getSizeStyles(size, theme)};
  ${({ type, theme }) => getTypeStyles(theme, type)};
`;

const Styled = { Link };

export default Styled;
