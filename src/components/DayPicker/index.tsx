import React, { FC, memo, useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Calendar from '@/components/Calendar';
import HeaderDateInput from '@/components/HeaderDateInput';
import GlobalStyle from '@/constants/styles/globalStyle';
import theme from '@/constants/theme';

import Wrapper from './styled';

const DayPicker: FC = () => {
  const [calenderIsOpen, setCalendarIsOpen] = useState<boolean>(true);
  const [headerDateInputValue, setHeaderDateInputValue] = useState<string>('');

  const openCalendarHandler = useCallback(
    () => setCalendarIsOpen((prevState: boolean) => !prevState),
    [setCalendarIsOpen]
  );

  const dateInputChangeHandler = useCallback(
    (dateInputValue: string) => {
      setHeaderDateInputValue(dateInputValue);
    },
    [setHeaderDateInputValue]
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <HeaderDateInput
          dateInputValue={headerDateInputValue}
          dateInputChangeHandler={dateInputChangeHandler}
          openCalendarHandler={openCalendarHandler}
        />
        {calenderIsOpen && <Calendar />}
      </Wrapper>
    </ThemeProvider>
  );
};

export default memo(DayPicker);
