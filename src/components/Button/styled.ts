import { TSize } from '@/src/types/theme';
import { DefaultTheme, styled } from 'styled-components';

const getSizeStyles = (size: TSize, theme: DefaultTheme) => {
  switch (size) {
    case 'primary':
      return `
                padding: 14px 28px;
                
                font-size: ${theme.fontSize.lg};
            `;
    case 'small':
      return `
                padding: 12px 20px;

                font-size: ${theme.fontSize.sm};
            `;
  }
};

const Button = styled('button')<{ size: TSize }>`
  width: fit-content;

  color: ${({ theme }) => theme.colors.hex.base.white};
  background: ${({ theme }) => theme.colors.gradient.primary.root};

  border: none;
  border-radius: 50px;

  box-shadow:
    inset 0px -2px 4px 0px rgba(0, 0, 0, 0.1),
    inset 0px 2px 12px 0px rgba(255, 255, 255, 0.2),
    inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1);

  cursor: pointer;

  ${({ size, theme }) => getSizeStyles(size, theme)};

  &:hover {
    background: ${({ theme }) => theme.colors.gradient.primary.hover};
  }

  &:disabled {
    display: none;
  }
`;

const Styled = { Button };

export default Styled;
