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
  form,
  title,
  isWeekendsOn,
  isWeekStartsOnMonday,
  isClearButtonVisible,
  isRangeCalendarOpen,
  holidaysColor,
  minDate,
  maxDate,
  rangeStartDate,
  rangeEndDate,
  defaultRangeDate,
  onChangeRangeDate
}) => {
  const [calenderIsOpen, setCalendarIsOpen] = useState<boolean>(false);
  const [headerDateInputValue, setHeaderDateInputValue] = useState<string>('');
  const [currentSelectedMonth, setCurrentSelectedMonth] = useState<number>(new Date().getMonth());
  const [currentSelectedYear, setCurrentSelectedYear] = useState<number>(new Date().getFullYear());
  const [toDoWindowIsOpen, setToDoWindowIsOpen] = useState<boolean>(false);
  const [activeDay, setActiveDay] = useState<number>(0);
  const [activeWeekNumber, setActiveWeekNumber] = useState<number>(0);

  useEffect(() => {
    if (form === 'week') {
      const day = new Date().getDate();
      const month = new Date().getMonth();
      const year = new Date().getFullYear();
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

  const changeCurrentActiveDay = useCallback(
    (newActiveDay: number) => {
      onChangeRangeDate(new Date(currentSelectedYear, currentSelectedMonth, newActiveDay));
      setActiveDay(newActiveDay);
    },
    [currentSelectedMonth, currentSelectedYear, onChangeRangeDate]
  );

  const closeOpenToDoHandler = useCallback(() => {
    if (!(rangeStartDate && rangeEndDate)) {
      setToDoWindowIsOpen((prevState) => !prevState);
    }
  }, [rangeEndDate, rangeStartDate]);

  const changeActiveWeekNumber = useCallback((newActiveWeek: number) => {
    setActiveWeekNumber(newActiveWeek);
  }, []);

  const clearCalendarHandler = useCallback(() => {
    onChangeRangeDate(defaultRangeDate);
    setActiveDay(0);
  }, [defaultRangeDate, onChangeRangeDate]);

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
            {(calenderIsOpen || isRangeCalendarOpen) && (
              <Calendar
                form={form}
                minDate={minDate}
                maxDate={maxDate}
                rangeStartDate={rangeStartDate}
                rangeEndDate={rangeEndDate}
                isWeekendsOn={isWeekendsOn}
                isClearButtonVisible={isClearButtonVisible}
                isWeekStartsOnMonday={isWeekStartsOnMonday}
                holidaysColor={holidaysColor}
                activeWeekNumber={activeWeekNumber}
                currentSelectedMonth={currentSelectedMonth}
                currentSelectedYear={currentSelectedYear}
                changeCurrentSelectedMonth={changeCurrentSelectedMonth}
                changeCurrentSelectedYear={changeCurrentSelectedYear}
                changeActiveWeekNumber={changeActiveWeekNumber}
                activeDay={activeDay}
                changeCurrentActiveDay={changeCurrentActiveDay}
                closeOpenToDoHandler={closeOpenToDoHandler}
                clearCalendarHandler={clearCalendarHandler}
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
