import React, { FC, memo } from 'react';
import { Wrapper } from './styled';
import Calendar from '@/components/Calendar';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/constants/styles/globalStyle';
import theme from '@/constants/theme';

const RangePicker: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Calendar />
      </Wrapper>
    </ThemeProvider>
  );
};

export default memo(RangePicker);
