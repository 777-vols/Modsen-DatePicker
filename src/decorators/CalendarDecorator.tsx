/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo, useRef } from 'react';

import CalendarDay from '@/components/CalendarDay';
import { DayName } from '@/components/DaysGrid/styled';
import IProps from '@/components/DaysGrid/types';
import { daysNamesStartsWithMonday, daysNamesStartsWithSunday } from '@/constants/calendarData';
import {
  convertToWeekFormat,
  getArrayOfDaysForMonthCalendar,
  getNumberOfDaysInMonth
} from '@/helpers/calendarHelpers';

const oneDay = 1;

const CalendarDecorator = (WrappedComponent: React.ElementType) => {
  const DecoratedComponent = (props: IProps) => {
    const {
      form,
      rangeStartDate,
      rangeEndDate,
      currentSelectedMonth,
      currentSelectedYear,
      isWeekendsOn,
      isWeekStartsOnMonday,
      holidaysColor,
      activeDay,
      activeWeekNumber,
      changeCurrentActiveDay,
      closeOpenToDoHandler,
      ...otherProps
    } = props;

    const weeksCountRef = useRef(0);

    const daysNamesArray = useMemo(() => {
      if (isWeekStartsOnMonday) {
        return daysNamesStartsWithMonday.map((dayName) => (
          <DayName key={dayName}>{dayName}</DayName>
        ));
      }
      return daysNamesStartsWithSunday.map((dayName) => <DayName key={dayName}>{dayName}</DayName>);
    }, [isWeekStartsOnMonday]);

    const daysNumbersArray = useMemo(() => {
      let arrayOfDaysForCalendar;
      const arrayOfDays = getArrayOfDaysForMonthCalendar(
        oneDay,
        getNumberOfDaysInMonth(currentSelectedYear, currentSelectedMonth + 1) + oneDay,
        currentSelectedMonth + 1,
        currentSelectedYear,
        isWeekStartsOnMonday,
        isWeekendsOn,
        rangeStartDate,
        rangeEndDate
      );

      if (form === 'week') {
        const arrayOfweeks = convertToWeekFormat(arrayOfDays);
        weeksCountRef.current = arrayOfweeks.length - 1;
        arrayOfDaysForCalendar = arrayOfweeks[activeWeekNumber];
      } else {
        arrayOfDaysForCalendar = arrayOfDays;
      }

      return arrayOfDaysForCalendar.map(({ id, day }) => {
        const {
          dayNumber,
          isHoliday,
          isCurrentDay,
          isWeekend,
          isHaveTodos,
          rangeStart,
          rangeEnd,
          isIncludeInRange
        } = day;
        if (typeof dayNumber === 'string') {
          return (
            <CalendarDay
              key={id}
              rangeStart={rangeStart}
              rangeEnd={rangeEnd}
              isIncludeInRange={isIncludeInRange}
              dayNumber={dayNumber}
              isHoliday={isHoliday}
              isWeekend={isWeekend}
              holidaysColor={holidaysColor}
              isCurrentDay={isCurrentDay}
            />
          );
        }

        return (
          <CalendarDay
            key={id}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
            isIncludeInRange={isIncludeInRange}
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
      currentSelectedYear,
      currentSelectedMonth,
      isWeekStartsOnMonday,
      isWeekendsOn,
      form,
      activeWeekNumber,
      rangeStartDate,
      rangeEndDate,
      holidaysColor,
      activeDay,
      changeCurrentActiveDay,
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
