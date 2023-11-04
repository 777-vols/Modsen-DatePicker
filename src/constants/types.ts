interface ITheme {
  colors: {
    gray: string;
    lightGray: string;
    blue: string;
    white: string;
    black: string;
    red: string;
    lightRed: string;
  };
  fontFamily: string;
  fontWeight: {
    l: number;
    m: number;
    s: number;
  };
  fontSize: {
    largeXL: string;
    largeL: string;
    largeM: string;
    largeS: string;
    mediumXL: string;
    mediumL: string;
    mediumM: string;
    mediumS: string;
    smallXL: string;
    smallL: string;
    smallM: string;
    smallS: string;
  };
  spaces: {
    largeXL: string;
    largeL: string;
    largeM: string;
    largeS: string;
    mediumXL: string;
    mediumL: string;
    mediumM: string;
    mediumS: string;
    smallXL: string;
    smallL: string;
    smallM: string;
    smallS: string;
    zero: string;
  };
  breakPoints: {
    largeL: string;
    largeM: string;
    largeS: string;
    mediumL: string;
    mediumM: string;
    mediumS: string;
    smallL: string;
    smallM: string;
    smallS: string;
  };
}
export default ITheme;
