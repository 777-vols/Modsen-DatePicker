/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';

import CalendarDay from '@/components/CalendarDay';
import InterfaceProps from '@/components/DaysGrid/types';
import { daysNamesStartsWithMon, daysNamesStartsWithSu } from '@/constants/calendarData';
import { getArrayOfDaysForCalendar, getNumberOfDaysInMonth } from '@/helpers/calendarHelpers';

const oneDay = 1;

const CalendarDecorator = (WrappedComponent: React.ElementType) => {
  const DecoratedComponent = (props: InterfaceProps) => {
    const { currentSelectedMonth, currentSelectedYear, weekFormat, ...otherProps } = props;

    const daysNamesArray = useMemo(() => {
      if (weekFormat === daysNamesStartsWithMon[0]) {
        return daysNamesStartsWithMon.map((dayName) => (
          <CalendarDay key={dayName} dayValue={dayName} isBold />
        ));
      }
      return daysNamesStartsWithSu.map((dayName) => (
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
        ).map(({ id, day }) =>
          typeof day === 'string' ? (
            <CalendarDay key={id} dayValue={day} />
          ) : (
            <CalendarDay key={id} dayValue={day} isBold />
          )
        ),
      [weekFormat, currentSelectedMonth, currentSelectedYear]
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
