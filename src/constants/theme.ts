import Colors from './styles/colors';
import FontSize from './styles/fontSizes';
import Margin from './styles/margins';
import Padding from './styles/paddings';
import ITheme from './types';

const theme: ITheme = {
  colors: {
    grey: Colors.GREY,
    lightGray: Colors.LIGHT_GREY,
    blue: Colors.BLUE,
    white: Colors.WHITE,
    black: Colors.BLACK,
    red: Colors.RED,
    lightRed: Colors.LIGHT_RED
  },
  fontFamily: "'Open Sans', sans-serif",
  fontWeight: {
    l: 700,
    m: 500,
    s: 200
  },
  fontSize: {
    largeXL: FontSize.LARGE_XL,
    largeL: FontSize.LARGE_L,
    largeM: FontSize.LARGE_M,
    largeS: FontSize.LARGE_S,
    mediumXL: FontSize.MEDIUM_XL,
    mediumL: FontSize.MEDIUM_L,
    mediumM: FontSize.MEDIUM_M,
    mediumS: FontSize.MEDIUM_S,
    smallXL: FontSize.SMALL_XL,
    smallL: FontSize.SMALL_L,
    smallM: FontSize.SMALL_M,
    smallS: FontSize.SMALL_S
  },
  padding: {
    largeXL: Padding.LARGE_XL,
    largeL: Padding.LARGE_L,
    largeM: Padding.LARGE_M,
    largeS: Padding.LARGE_S,
    mediumXL: Padding.MEDIUM_XL,
    mediumL: Padding.MEDIUM_L,
    mediumM: Padding.MEDIUM_M,
    mediumS: Padding.MEDIUM_S,
    smallXL: Padding.SMALL_XL,
    smallL: Padding.SMALL_L,
    smallM: Padding.SMALL_M,
    smallS: Padding.SMALL_S,
    zero: Padding.ZERO
  },
  margin: {
    largeXL: Margin.LARGE_XL,
    largeL: Margin.LARGE_L,
    largeM: Margin.LARGE_M,
    largeS: Margin.LARGE_S,
    mediumXL: Margin.MEDIUM_XL,
    mediumL: Margin.MEDIUM_L,
    mediumM: Margin.MEDIUM_M,
    mediumS: Margin.MEDIUM_S,
    smallXL: Margin.SMALL_XL,
    smallL: Margin.SMALL_L,
    smallM: Margin.SMALL_M,
    smallS: Margin.SMALL_S,
    zero: Margin.ZERO
  }
};

export default theme;
