/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';

import CalendarDay from '@/components/CalendarDay';
import { DayName } from '@/components/DaysGrid/styled';
import IProps from '@/components/DaysGrid/types';
import { daysNamesStartsWithMonday, daysNamesStartsWithSunday } from '@/constants/calendarData';
import {
  getArrayOfDaysForCalendar,
  getNumberOfDaysInMonth,
  getWeekend
} from '@/helpers/calendarHelpers';

const oneDay = 1;

const CalendarDecorator = (WrappedComponent: React.ElementType) => {
  const DecoratedComponent = (props: IProps) => {
    const {
      currentSelectedMonth,
      currentSelectedYear,
      isWeekendsOn,
      isWeekStartsOnMonday,
      holidaysColor,
      activeDay,
      changeCurrentActiveDay,
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

    const daysNumbersArray = useMemo(
      () =>
        getArrayOfDaysForCalendar(
          oneDay,
          getNumberOfDaysInMonth(currentSelectedYear, currentSelectedMonth + 1) + oneDay,
          currentSelectedMonth + 1,
          currentSelectedYear,
          isWeekStartsOnMonday,
          isWeekendsOn
        ).map(({ id, day }) => {
          const { dayNumber, isHoliday, isCurrentDay, isWeekend } = day;
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
              holidaysColor={holidaysColor}
              isCurrentDay={isCurrentDay}
              activeDay={activeDay}
              changeCurrentActiveDay={changeCurrentActiveDay}
              closeOpenToDoHandler={closeOpenToDoHandler}
              isBold
            />
          );
        }),
      [
        isWeekStartsOnMonday,
        currentSelectedMonth,
        currentSelectedYear,
        activeDay,
        isWeekendsOn,
        holidaysColor,
        changeCurrentActiveDay,
        closeOpenToDoHandler
      ]
    );
    return (
      <WrappedComponent
        {...otherProps}
        daysNamesArray={daysNamesArray}
        daysNumbersArray={daysNumbersArray}
      />
    );
  };
  return DecoratedComponent;
};

export default CalendarDecorator;
