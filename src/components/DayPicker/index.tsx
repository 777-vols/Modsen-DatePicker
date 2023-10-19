import React, { FC, memo, useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Calendar from '@/components/Calendar';
import HeaderDateInput from '@/components/HeaderDateInput';
import GlobalStyle from '@/constants/styles/globalStyle';
import theme from '@/constants/theme';

import Wrapper from './styled';

const oneDay = 1;
const oneYear = 1;
const januaryIndex = 1;
const decemberIndex = 12;

const DayPicker: FC = () => {
  const [calenderIsOpen, setCalendarIsOpen] = useState<boolean>(true);
  const [headerDateInputValue, setHeaderDateInputValue] = useState<string>('');
  const [currentSelectedMonth, setCurrentSelectedMonth] = useState(new Date().getMonth() + oneDay);
  const [currentSelectedYear, setCurrentSelectedYear] = useState(new Date().getFullYear());

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

  const changeCurrentSelectedMonth = (newMonth: number) => {
    if (newMonth < januaryIndex) {
      setCurrentSelectedMonth(decemberIndex);
      setCurrentSelectedYear((prevState) => prevState - oneYear);
    } else if (newMonth > decemberIndex) {
      setCurrentSelectedMonth(januaryIndex);
      setCurrentSelectedYear((prevState) => prevState + oneYear);
    } else {
      setCurrentSelectedMonth(newMonth);
    }
  };

  const changeCurrentSelectedYear = (newYear: number) => {
    setCurrentSelectedYear(newYear);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <HeaderDateInput
          dateInputValue={headerDateInputValue}
          dateInputChangeHandler={dateInputChangeHandler}
          openCalendarHandler={openCalendarHandler}
          changeCurrentSelectedMonth={changeCurrentSelectedMonth}
          changeCurrentSelectedYear={changeCurrentSelectedYear}
        />
        {calenderIsOpen && (
          <Calendar
            currentSelectedMonth={currentSelectedMonth}
            currentSelectedYear={currentSelectedYear}
            changeCurrentSelectedMonth={changeCurrentSelectedMonth}
            changeCurrentSelectedYear={changeCurrentSelectedYear}
          />
        )}
      </Wrapper>
    </ThemeProvider>
  );
};

export default memo(DayPicker);
