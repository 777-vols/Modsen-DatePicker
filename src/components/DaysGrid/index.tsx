import React, { FC, memo, useMemo } from 'react';

import { daysNamesStartsWithMon, daysNamesStartsWithSu } from '@/constants/calendarData';
import { getArrayOfDaysForCalendar, getNumberOfDaysInMonth } from '@/helpers/calendarHelpers';

import CalendarDay from '../CalendarDay';
import { MonthDaysNumbers, WeekDaysNames, Wrapper } from './styled';
import InterfaceProps from './types';

const oneDay = 1;

const DaysGrid: FC<InterfaceProps> = (props) => {
  const { currentSelectedMonth, currentSelectedYear, weekFormat, changeWeekFormat } = props;
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

  // console.log(getNumberOfDaysInMonth(yearNumber, monthNumber));
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
    <Wrapper>
      <WeekDaysNames onClick={changeWeekFormat}>{daysNamesArray}</WeekDaysNames>
      <MonthDaysNumbers>{daysNumbersArray}</MonthDaysNumbers>
    </Wrapper>
  );
};

export default memo(DaysGrid);
