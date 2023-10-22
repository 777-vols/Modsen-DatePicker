import { createGlobalStyle, DefaultTheme } from 'styled-components';

import theme from '@/constants/theme';

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
* {
  font-family: ${theme.fontFamily};
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  outline: none;
  padding: ${theme.padding.zero};
  margin: ${theme.padding.zero};
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background:  ${theme.colors.lightGray};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.grey};
    border-radius: 10px;
    border: 1px solid ${theme.colors.black};
  }
}`;

export default GlobalStyle;
