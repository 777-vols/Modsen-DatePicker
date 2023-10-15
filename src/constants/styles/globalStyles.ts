import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import paddings from './paddings';
import margins from './margins';

const GlobalStyle = createGlobalStyle`
* {
  font-family: ${fonts.fontFamily};
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  outline: none;
  padding: ${paddings.zero};
  margin: ${margins.zero};
}`;

export default GlobalStyle;
