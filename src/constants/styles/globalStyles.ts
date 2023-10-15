import { createGlobalStyle } from 'styled-components';
import theme from '@/constants/theme';

const GlobalStyle = createGlobalStyle`
* {
  font-family: ${theme.fontFamily};
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  outline: none;
  padding: ${theme.padding.zero};
  margin: ${theme.padding.zero};
}`;

export default GlobalStyle;
