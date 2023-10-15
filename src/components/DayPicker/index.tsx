import React, { memo } from 'react';
import { Wrapper } from './styled';
import Calendar from '@/components/Calendar';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/constants/styles/globalStyles';
import theme from '@/constants/theme';
import InterfaceProps from './types';
import HeaderInput from '@/components/HeaderInput';

const DayPicker = memo(function DayPicker({ value, inputHandler }: InterfaceProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <HeaderInput value={value} inputHandler={inputHandler} />
        <Calendar />
      </Wrapper>
    </ThemeProvider>
  );
});

export default DayPicker;
