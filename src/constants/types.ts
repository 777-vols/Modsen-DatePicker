interface ITheme {
  colors: {
    grey: string;
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
  padding: {
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
  margin: {
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
}
export default ITheme;
