/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';

import CalendarDay from '@/components/CalendarDay';
import IProps from '@/components/DaysGrid/types';
import { daysNamesStartsWithMonday, daysNamesStartsWithSunday } from '@/constants/calendarData';
import { getArrayOfDaysForCalendar, getNumberOfDaysInMonth } from '@/helpers/calendarHelpers';

const oneDay = 1;

const CalendarDecorator = (WrappedComponent: React.ElementType) => {
  const DecoratedComponent = (props: IProps) => {
    const {
      currentSelectedMonth,
      currentSelectedYear,
      weekFormat,
      activeDay,
      changeCurrentActiveDay,
      closeOpenToDoHandler,
      ...otherProps
    } = props;

    const daysNamesArray = useMemo(() => {
      if (weekFormat === daysNamesStartsWithMonday[0]) {
        return daysNamesStartsWithMonday.map((dayName) => (
          <CalendarDay key={dayName} dayValue={dayName} isBold />
        ));
      }
      return daysNamesStartsWithSunday.map((dayName) => (
        <CalendarDay key={dayName} dayValue={dayName} isBold />
      ));
    }, [weekFormat]);

    const daysNumbersArray = useMemo(
      () =>
        getArrayOfDaysForCalendar(
          oneDay,
          getNumberOfDaysInMonth(currentSelectedYear, currentSelectedMonth) + oneDay,
          currentSelectedMonth,
          currentSelectedYear,
          weekFormat
        ).map(({ id, day }) => {
          const { dayNumber, isHoliday, isCurrentDay } = day;
          return typeof dayNumber === 'string' ? (
            <CalendarDay
              key={id}
              dayValue={day.dayNumber}
              isHoliday={isHoliday}
              isCurrentDay={isCurrentDay}
            />
          ) : (
            <CalendarDay
              key={id}
              dayValue={day.dayNumber}
              isHoliday={isHoliday}
              isCurrentDay={isCurrentDay}
              activeDay={activeDay}
              changeCurrentActiveDay={changeCurrentActiveDay}
              closeOpenToDoHandler={closeOpenToDoHandler}
              isBold
            />
          );
        }),
      [
        weekFormat,
        currentSelectedMonth,
        currentSelectedYear,
        activeDay,
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
