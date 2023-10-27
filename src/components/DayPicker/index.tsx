import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Calendar from '@/components/Calendar';
import ErrorBoundary from '@/components/ErrorBoundary';
import HeaderDateInput from '@/components/HeaderDateInput';
import ToDoWindow from '@/components/ToDoWindow';
import GlobalStyle from '@/constants/styles/globalStyle';
import theme from '@/constants/theme';
import { getWeekNumberForDay } from '@/helpers/calendarHelpers';

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
  maxDate,
  form
}) => {
  const [calenderIsOpen, setCalendarIsOpen] = useState(true);
  const [headerDateInputValue, setHeaderDateInputValue] = useState<string>('');
  const [currentSelectedMonth, setCurrentSelectedMonth] = useState(new Date().getMonth());
  const [currentSelectedYear, setCurrentSelectedYear] = useState(new Date().getFullYear());
  const [toDoWindowIsOpen, setToDoWindowIsOpen] = useState(false);
  const [activeDay, setActiveDay] = useState(0);
  const [weeksCount, setWeeksCount] = useState(0);
  const [activeWeekNumber, setActiveWeekNumber] = useState(0);

  useEffect(() => {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    if (form === 'week') {
      setActiveWeekNumber(
        getWeekNumberForDay(Number(day), Number(month), Number(year), isWeekStartsOnMonday)
      );
    }
  }, [form, isWeekStartsOnMonday]);

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
          return true;
        }
      }
      return false;
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

  const changeWeeksCount = useCallback((newWeeksCount: number) => setWeeksCount(newWeeksCount), []);

  const changeActiveWeekNumber = useCallback((newActiveWeek: number) => {
    setActiveWeekNumber(newActiveWeek);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <ErrorBoundary>
        <Wrapper>
          <WrapperInner>
            <HeaderDateInput
              title={title}
              form={form}
              minDate={minDate}
              maxDate={maxDate}
              isWeekStartsOnMonday={isWeekStartsOnMonday}
              dateInputValue={headerDateInputValue}
              dateInputChangeHandler={dateInputChangeHandler}
              openCalendarHandler={openCalendarHandler}
              changeCurrentActiveDay={changeCurrentActiveDay}
              changeCurrentSelectedMonth={changeCurrentSelectedMonth}
              changeCurrentSelectedYear={changeCurrentSelectedYear}
              changeActiveWeekNumber={changeActiveWeekNumber}
            />
            {calenderIsOpen && (
              <Calendar
                form={form}
                weeksCount={weeksCount}
                isWeekendsOn={isWeekendsOn}
                isWeekStartsOnMonday={isWeekStartsOnMonday}
                holidaysColor={holidaysColor}
                activeWeekNumber={activeWeekNumber}
                currentSelectedMonth={currentSelectedMonth}
                currentSelectedYear={currentSelectedYear}
                changeCurrentSelectedMonth={changeCurrentSelectedMonth}
                changeCurrentSelectedYear={changeCurrentSelectedYear}
                changeWeeksCount={changeWeeksCount}
                changeActiveWeekNumber={changeActiveWeekNumber}
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
