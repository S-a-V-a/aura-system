'use client';

import { FC, PropsWithChildren } from 'react';
import { ThemeProvider as RootThemeProvider, createGlobalStyle } from 'styled-components';
import { colors } from './colors';
import { fontSize } from './fontSize';

export const theme = {
  colors,
  fontSize,
};

export const GlobalStyle = createGlobalStyle`
    * {
        padding:0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${theme.colors.hex.base.white};
        color: ${theme.colors.hex.base.black};
    }
`;

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <RootThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </RootThemeProvider>
  );
};
