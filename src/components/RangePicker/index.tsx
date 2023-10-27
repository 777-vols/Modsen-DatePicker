import React, { FC, memo } from 'react';
import { ThemeProvider } from 'styled-components';

import Calendar from '@/components/Calendar';
import GlobalStyle from '@/constants/styles/globalStyle';
import theme from '@/constants/theme';

const RangePicker: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle theme={theme} />
    {/* <Wrapper>
      <Calendar />
    </Wrapper> */}
  </ThemeProvider>
);

export default memo(RangePicker);
