import { TSize, TType } from '@/src/types/theme';
import { TFontSizeKeys } from '@/src/types/theme/fontSize';
import { motion } from 'framer-motion';
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

            &:disabled {
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

            &:disabled {
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

const Button = styled(motion.button)<{
  size: TFontSizeKeys;
  variant: TType;
}>`
  display: block;

  width: fit-content;

  border: none;
  border-radius: 50px;

  text-decoration: none;
  text-align: center;

  ${({ size, theme }) => getSizeStyles(size, theme)};
  ${({ variant, theme }) => getTypeStyles(theme, variant)};
`;

const Styled = { Button };

export default Styled;
