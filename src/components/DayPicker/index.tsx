import React, { FC, memo } from 'react';
import { Wrapper } from './styled';
import Calendar from '@/components/Calendar';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/constants/styles/globalStyle';
import theme from '@/constants/theme';
import InterfaceProps from './types';
import HeaderInput from '@/components/HeaderInput';

const DayPicker: FC<InterfaceProps> = ({ value, inputHandler }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <HeaderInput value={value} inputHandler={inputHandler} />
        <Calendar />
      </Wrapper>
    </ThemeProvider>
  );
};

export default memo(DayPicker);
