import React, { useMemo } from 'react';

import { DayName } from '@/components/DaysGrid/styled';
import IProps from '@/components/DaysGrid/types';
import { daysNamesStartsWithMonday, daysNamesStartsWithSunday } from '@/constants/calendarData';
import useDaysNumbersArray from '@/hooks/useDaysNumbersArray';

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
      isStartCalendar,
      holidaysColor,
      activeDay,
      activeWeekNumber,
      changeCurrentActiveDay,
      closeOpenToDoHandler,
      ...otherProps
    } = props;

    const daysNamesArray = useMemo(() => {
      if (isWeekStartsOnMonday) {
        return daysNamesStartsWithMonday.map((dayName) => (
          <DayName data-testid="weekDayName" key={dayName}>
            {dayName}
          </DayName>
        ));
      }
      return daysNamesStartsWithSunday.map((dayName) => (
        <DayName data-testid="weekDayName" key={dayName}>
          {dayName}
        </DayName>
      ));
    }, [isWeekStartsOnMonday]);

    const daysNumbersArray = useDaysNumbersArray(
      form,
      currentSelectedMonth,
      currentSelectedYear,
      isWeekendsOn,
      isWeekStartsOnMonday,
      activeWeekNumber,
      holidaysColor,
      activeDay,
      changeCurrentActiveDay,
      closeOpenToDoHandler,
      rangeStartDate,
      rangeEndDate,
      isStartCalendar
    );

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
