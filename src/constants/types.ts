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
    largeXL: number;
    largeL: number;
    largeM: number;
    largeS: number;
    mediumXL: number;
    mediumL: number;
    mediumM: number;
    mediumS: number;
    smallXL: number;
    smallL: number;
    smallM: number;
    smallS: number;
  };
  spaces: {
    largeXL: number;
    largeL: number;
    largeM: number;
    largeS: number;
    mediumXL: number;
    mediumL: number;
    mediumM: number;
    mediumS: number;
    smallXL: number;
    smallL: number;
    smallM: number;
    smallS: number;
    zero: number;
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
