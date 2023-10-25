import React, { FC, memo, useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Calendar from '@/components/Calendar';
import ErrorBoundary from '@/components/ErrorBoundary';
import HeaderDateInput from '@/components/HeaderDateInput';
import ToDoWindow from '@/components/ToDoWindow';
import GlobalStyle from '@/constants/styles/globalStyle';
import theme from '@/constants/theme';

import { Wrapper, WrapperInner } from './styled';
import IProps from './types';

const oneYear = 1;
const januaryIndex = 0;
const decemberIndex = 11;

const DayPicker: FC<IProps> = ({
  title,
  isWeekendsOn,
  isWeekStartsOnMonday,
  holidaysColor,
  minDate,
  maxDate
}) => {
  const [calenderIsOpen, setCalendarIsOpen] = useState<boolean>(true);
  const [headerDateInputValue, setHeaderDateInputValue] = useState<string>('');
  const [currentSelectedMonth, setCurrentSelectedMonth] = useState(new Date().getMonth());
  const [currentSelectedYear, setCurrentSelectedYear] = useState(new Date().getFullYear());
  const [toDoWindowIsOpen, setToDoWindowIsOpen] = useState(false);
  const [activeDay, setActiveDay] = useState<number>(0);

  const openCalendarHandler = useCallback(
    () => setCalendarIsOpen((prevState: boolean) => !prevState),
    []
  );

  const dateInputChangeHandler = useCallback((dateInputValue: string) => {
    setHeaderDateInputValue(dateInputValue);
  }, []);

  const changeCurrentSelectedMonth = useCallback(
    (newMonth: number) => {
      if (
        new Date(currentSelectedYear, newMonth, 1) >= minDate &&
        new Date(currentSelectedYear, newMonth, 1) < maxDate
      ) {
        if (newMonth < januaryIndex) {
          setCurrentSelectedMonth(decemberIndex);
          setCurrentSelectedYear((prevState) => prevState - oneYear);
        } else if (newMonth > decemberIndex) {
          setCurrentSelectedMonth(januaryIndex);
          setCurrentSelectedYear((prevState) => prevState + oneYear);
        } else {
          setCurrentSelectedMonth(newMonth);
        }
      }
    },
    [currentSelectedYear, maxDate, minDate]
  );

  const changeCurrentSelectedYear = useCallback((newYear: number) => {
    setCurrentSelectedYear(newYear);
  }, []);

  const changeCurrentActiveDay = useCallback((newActiveDay: number) => {
    setActiveDay(newActiveDay);
  }, []);

  const closeOpenToDoHandler = useCallback(
    () => setToDoWindowIsOpen((prevState) => !prevState),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ErrorBoundary>
        <Wrapper>
          <WrapperInner>
            <HeaderDateInput
              title={title}
              dateInputValue={headerDateInputValue}
              dateInputChangeHandler={dateInputChangeHandler}
              openCalendarHandler={openCalendarHandler}
              changeCurrentActiveDay={changeCurrentActiveDay}
              changeCurrentSelectedMonth={changeCurrentSelectedMonth}
              changeCurrentSelectedYear={changeCurrentSelectedYear}
            />
            {calenderIsOpen && (
              <Calendar
                isWeekendsOn={isWeekendsOn}
                isWeekStartsOnMonday={isWeekStartsOnMonday}
                holidaysColor={holidaysColor}
                currentSelectedMonth={currentSelectedMonth}
                currentSelectedYear={currentSelectedYear}
                changeCurrentSelectedMonth={changeCurrentSelectedMonth}
                changeCurrentSelectedYear={changeCurrentSelectedYear}
                activeDay={activeDay}
                changeCurrentActiveDay={changeCurrentActiveDay}
                closeOpenToDoHandler={closeOpenToDoHandler}
              />
            )}
            {toDoWindowIsOpen && (
              <ToDoWindow
                closeOpenToDoHandler={closeOpenToDoHandler}
                currentSelectedMonth={currentSelectedMonth}
                currentSelectedYear={currentSelectedYear}
                activeDay={activeDay}
              />
            )}
          </WrapperInner>
        </Wrapper>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default memo(DayPicker);
