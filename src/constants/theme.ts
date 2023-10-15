import styledColors from './styles/colors';
import fonts from './styles/fonts';
import margins from './styles/margins';
import paddings from './styles/paddings';

const theme = {
  colors: {
    ...styledColors
  },
  fontFamily: fonts.fontFamily,
  fontWeight: fonts.fontWeight,
  fontSize: {
    ...fonts.fontSize
  },
  padding: { ...paddings },
  margin: { ...margins }
};

export default theme;
