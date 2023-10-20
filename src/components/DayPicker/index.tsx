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
  const [activeDay, setActiveDay] = useState<number>(0);

  const openCalendarHandler = useCallback(
    () => setCalendarIsOpen((prevState: boolean) => !prevState),
    []
  );

  const dateInputChangeHandler = useCallback((dateInputValue: string) => {
    setHeaderDateInputValue(dateInputValue);
  }, []);

  const changeCurrentSelectedMonth = useCallback((newMonth: number) => {
    if (newMonth < januaryIndex) {
      setCurrentSelectedMonth(decemberIndex);
      setCurrentSelectedYear((prevState) => prevState - oneYear);
    } else if (newMonth > decemberIndex) {
      setCurrentSelectedMonth(januaryIndex);
      setCurrentSelectedYear((prevState) => prevState + oneYear);
    } else {
      setCurrentSelectedMonth(newMonth);
    }
    setActiveDay(0);
  }, []);

  const changeCurrentSelectedYear = useCallback((newYear: number) => {
    setCurrentSelectedYear(newYear);
  }, []);

  const changeCurrentActiveDay = useCallback((newActiveDay: number) => {
    setActiveDay(newActiveDay);
  }, []);

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
            activeDay={activeDay}
            changeCurrentActiveDay={changeCurrentActiveDay}
          />
        )}
      </Wrapper>
    </ThemeProvider>
  );
};

export default memo(DayPicker);
