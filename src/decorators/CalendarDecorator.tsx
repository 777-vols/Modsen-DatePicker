/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';

import CalendarDay from '@/components/CalendarDay';
import { DayName } from '@/components/DaysGrid/styled';
import IProps from '@/components/DaysGrid/types';
import { daysNamesStartsWithMonday, daysNamesStartsWithSunday } from '@/constants/calendarData';
import {
  convertToWeekFormat,
  getArrayOfDaysForMonthCalendar,
  getNumberOfDaysInMonth,
  getWeekend
} from '@/helpers/calendarHelpers';

const oneDay = 1;

const CalendarDecorator = (WrappedComponent: React.ElementType) => {
  const DecoratedComponent = (props: IProps) => {
    const {
      form,
      currentSelectedMonth,
      currentSelectedYear,
      isWeekendsOn,
      isWeekStartsOnMonday,
      holidaysColor,
      activeDay,
      activeWeekNumber,
      changeWeeksCount,
      changeCurrentActiveDay,
      changeActiveWeekNumber,
      closeOpenToDoHandler,
      ...otherProps
    } = props;

    const daysNamesArray = useMemo(() => {
      if (isWeekStartsOnMonday) {
        return daysNamesStartsWithMonday.map((dayName) => (
          <DayName key={dayName}>{dayName}</DayName>
        ));
      }
      return daysNamesStartsWithSunday.map((dayName) => <DayName key={dayName}>{dayName}</DayName>);
    }, [isWeekStartsOnMonday]);

    const daysNumbersArray = useMemo(() => {
      const arrayOfDaysForCalendar =
        form === 'week'
          ? convertToWeekFormat(
              getArrayOfDaysForMonthCalendar(
                oneDay,
                getNumberOfDaysInMonth(currentSelectedYear, currentSelectedMonth + 1) + oneDay,
                currentSelectedMonth + 1,
                currentSelectedYear,
                isWeekStartsOnMonday,
                isWeekendsOn
              ),
              changeWeeksCount,
              changeActiveWeekNumber,
              activeWeekNumber
            )
          : getArrayOfDaysForMonthCalendar(
              oneDay,
              getNumberOfDaysInMonth(currentSelectedYear, currentSelectedMonth + 1) + oneDay,
              currentSelectedMonth + 1,
              currentSelectedYear,
              isWeekStartsOnMonday,
              isWeekendsOn
            );
      return arrayOfDaysForCalendar.map(({ id, day }) => {
        const { dayNumber, isHoliday, isCurrentDay, isWeekend, isHaveTodos } = day;
        if (typeof dayNumber === 'string') {
          return (
            <CalendarDay
              key={id}
              dayNumber={dayNumber}
              isHoliday={isHoliday}
              isWeekend={isWeekend}
              holidaysColor={holidaysColor}
              isCurrentDay={isCurrentDay}
            />
          );
        }
        getWeekend(dayNumber, currentSelectedMonth, currentSelectedYear);
        return (
          <CalendarDay
            key={id}
            dayNumber={dayNumber}
            isHoliday={isHoliday}
            isWeekend={isWeekend}
            isHaveTodos={isHaveTodos}
            holidaysColor={holidaysColor}
            isCurrentDay={isCurrentDay}
            activeDay={activeDay}
            changeCurrentActiveDay={changeCurrentActiveDay}
            closeOpenToDoHandler={closeOpenToDoHandler}
            isBold
          />
        );
      });
    }, [
      form,
      isWeekStartsOnMonday,
      currentSelectedMonth,
      currentSelectedYear,
      activeDay,
      isWeekendsOn,
      holidaysColor,
      activeWeekNumber,
      changeWeeksCount,
      changeCurrentActiveDay,
      changeActiveWeekNumber,
      closeOpenToDoHandler
    ]);
    return (
      <WrappedComponent
        {...otherProps}
        form={form}
        daysNamesArray={daysNamesArray}
        daysNumbersArray={daysNumbersArray}
      />
    );
  };
  return DecoratedComponent;
};

export default CalendarDecorator;
