import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Calendar from '@/components/Calendar';
import ErrorBoundary from '@/components/ErrorBoundary';
import HeaderDateInput from '@/components/HeaderDateInput';
import ToDoWindow from '@/components/ToDoWindow';
import GlobalStyle from '@/constants/styles/globalStyle';
import theme from '@/constants/theme';
import { getWeekNumberForDay, getWeeksCount, paddingWithZeros } from '@/helpers/calendarHelpers';

import { Wrapper, WrapperInner } from './styled';
import { IProps } from './types';

const oneYear = 1;
const firstWeekIndex = 0;
const januaryIndex = 0;
const decemberIndex = 11;

const DayPicker: FC<IProps> = (props) => {
  const {
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
  } = props;

  const [calenderIsOpen, setCalendarIsOpen] = useState<boolean>(true);
  const [headerDateInputValue, setHeaderDateInputValue] = useState<string>('');
  const [currentSelectedMonth, setCurrentSelectedMonth] = useState<number>(new Date().getMonth());
  const [currentSelectedYear, setCurrentSelectedYear] = useState<number>(new Date().getFullYear());
  const [toDoWindowIsOpen, setToDoWindowIsOpen] = useState<boolean>(false);
  const [activeDay, setActiveDay] = useState<number>(0);
  const [activeWeekNumber, setActiveWeekNumber] = useState<number>(0);

  useEffect(() => {
    if (form === 'week') {
      setActiveWeekNumber(
        getWeekNumberForDay(
          new Date().getDate(),
          currentSelectedMonth,
          currentSelectedYear,
          isWeekStartsOnMonday
        ) || firstWeekIndex
      );
    }
  }, [form, isWeekStartsOnMonday]);

  useEffect(() => {
    if (defaultRangeDate) {
      setCurrentSelectedMonth(defaultRangeDate.getMonth());
      setCurrentSelectedYear(defaultRangeDate.getFullYear());
      if (form === 'week') {
        setActiveWeekNumber(
          getWeekNumberForDay(
            Number(defaultRangeDate.getDate()),
            Number(defaultRangeDate.getMonth()),
            Number(defaultRangeDate.getFullYear()),
            isWeekStartsOnMonday
          )
        );
      }
    }
  }, []);

  useEffect(() => {
    if (rangeStartDate && rangeEndDate && rangeStartDate === rangeEndDate) {
      setActiveDay(rangeStartDate.getDate());
      setCurrentSelectedMonth(rangeStartDate.getMonth());
      setCurrentSelectedYear(rangeStartDate.getFullYear());
    }
  }, [rangeEndDate, rangeStartDate]);

  const openCalendarHandler = useCallback(
    () => setCalendarIsOpen((prevState: boolean) => !prevState),
    []
  );

  const dateInputChangeHandler = useCallback((dateInputValue: string) => {
    setHeaderDateInputValue(dateInputValue);
  }, []);

  const changeCurrentSelectedMonth = useCallback(
    (newMonth: number) => {
      if (rangeStartDate && rangeEndDate) {
        setActiveDay(0);
      }
      if (
        new Date(currentSelectedYear, newMonth, 1) >= minDate &&
        new Date(currentSelectedYear, newMonth, 1) < maxDate
      ) {
        if (newMonth < januaryIndex) {
          setCurrentSelectedMonth(decemberIndex);
          setCurrentSelectedYear((prevState) => prevState - oneYear);
          setActiveWeekNumber(
            getWeeksCount(
              decemberIndex,
              currentSelectedYear - oneYear,
              isWeekStartsOnMonday,
              isWeekendsOn
            )
          );
        } else if (newMonth > decemberIndex) {
          setCurrentSelectedMonth(januaryIndex);
          setCurrentSelectedYear((prevState) => prevState + oneYear);
          setActiveWeekNumber(firstWeekIndex);
        } else {
          setCurrentSelectedMonth(newMonth);
          return true;
        }
      }
      return false;
    },
    [
      currentSelectedYear,
      isWeekStartsOnMonday,
      isWeekendsOn,
      maxDate,
      minDate,
      rangeEndDate,
      rangeStartDate
    ]
  );

  const changeCurrentSelectedYear = useCallback((newYear: number) => {
    setCurrentSelectedYear(newYear);
  }, []);

  const changeCurrentActiveDay = useCallback(
    (newActiveDay: number, isHeaderInputValue?: boolean) => {
      setActiveDay(newActiveDay);
      if (!isHeaderInputValue) {
        setHeaderDateInputValue(
          `${paddingWithZeros(newActiveDay)}/${paddingWithZeros(
            currentSelectedMonth
          )}/${currentSelectedYear}`
        );
      }
      if (onChangeRangeDate)
        onChangeRangeDate(new Date(currentSelectedYear, currentSelectedMonth, newActiveDay));
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
    if (defaultRangeDate && onChangeRangeDate) {
      onChangeRangeDate(defaultRangeDate);
      setActiveDay(0);
      setHeaderDateInputValue('');
      setCurrentSelectedMonth(defaultRangeDate.getMonth());
      setCurrentSelectedYear(defaultRangeDate.getFullYear());
      if (form === 'week') {
        setActiveWeekNumber(
          getWeekNumberForDay(
            defaultRangeDate.getDate(),
            defaultRangeDate.getMonth(),
            defaultRangeDate.getFullYear(),
            isWeekStartsOnMonday
          )
        );
      }
    }
  }, [defaultRangeDate, form, isWeekStartsOnMonday, onChangeRangeDate]);

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
              onChangeRangeDate={onChangeRangeDate}
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
