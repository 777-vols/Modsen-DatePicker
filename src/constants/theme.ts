import BreakPoints from './styles/breakPoints';
import Colors from './styles/colors';
import FontSize from './styles/fontSizes';
import Spaces from './styles/spaces';
import ITheme from './types';

const theme: ITheme = {
  colors: {
    gray: Colors.GRAY,
    lightGray: Colors.LIGHT_GRAY,
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
  spaces: {
    largeXL: Spaces.LARGE_XL,
    largeL: Spaces.LARGE_L,
    largeM: Spaces.LARGE_M,
    largeS: Spaces.LARGE_S,
    mediumXL: Spaces.MEDIUM_XL,
    mediumL: Spaces.MEDIUM_L,
    mediumM: Spaces.MEDIUM_M,
    mediumS: Spaces.MEDIUM_S,
    smallXL: Spaces.SMALL_XL,
    smallL: Spaces.SMALL_L,
    smallM: Spaces.SMALL_M,
    smallS: Spaces.SMALL_S,
    zero: Spaces.ZERO
  },
  breakPoints: {
    largeL: BreakPoints.LARGE_L,
    largeM: BreakPoints.LARGE_M,
    largeS: BreakPoints.LARGE_S,
    mediumL: BreakPoints.MEDIUM_L,
    mediumM: BreakPoints.MEDIUM_M,
    mediumS: BreakPoints.MEDIUM_S,
    smallL: BreakPoints.SMALL_L,
    smallM: BreakPoints.SMALL_M,
    smallS: BreakPoints.SMALL_S
  }
};

export default theme;
