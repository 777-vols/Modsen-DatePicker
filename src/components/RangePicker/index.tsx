import React, { FC, memo } from 'react';
import { ThemeProvider } from 'styled-components';

import DayPicker from '@/components/DayPicker';
import GlobalStyle from '@/constants/styles/globalStyle';
import theme from '@/constants/theme';

import Wrapper from './styled';
import IProps from './types';

const RangePicker: FC<IProps> = ({
  isWeekendsOn,
  isWeekStartsOnMonday,
  holidaysColor,
  minDate,
  maxDate,
  form
}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle theme={theme} />
    <Wrapper>
      <DayPicker
        title="From"
        form={form}
        isWeekendsOn={isWeekendsOn}
        holidaysColor={holidaysColor}
        isWeekStartsOnMonday={isWeekStartsOnMonday}
        minDate={minDate}
        maxDate={maxDate}
      />
      <DayPicker
        title="To"
        form={form}
        isWeekendsOn={isWeekendsOn}
        holidaysColor={holidaysColor}
        isWeekStartsOnMonday={isWeekStartsOnMonday}
        minDate={minDate}
        maxDate={maxDate}
      />
    </Wrapper>
  </ThemeProvider>
);

export default memo(RangePicker);
