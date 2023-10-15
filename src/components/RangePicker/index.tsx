import React from 'react';
import { Wrapper } from './styled';
import Calendar from '@/components/Calendar';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/constants/styles/globalStyles';
import theme from '@/constants/theme';

const RangePicker = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Calendar />
      </Wrapper>
    </ThemeProvider>
  );
};

export default RangePicker;
