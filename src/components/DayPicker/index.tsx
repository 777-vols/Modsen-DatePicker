import React from 'react';
import { Wrapper } from './styled';
import Calendar from '@/components/Calendar';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/constants/styles/globalStyles';
import theme from '@/constants/theme';
import InterfaceProps from './types';

const DayPicker = ({ value, inputHandler }: InterfaceProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Calendar value={value} inputHandler={inputHandler} />
      </Wrapper>
    </ThemeProvider>
  );
};

export default DayPicker;
