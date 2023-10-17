import React, { FC, memo, useMemo } from 'react';

import { daysNamesStartsWithSu } from '@/constants/calendarData';

import MonthDay from '../CalendarDay';
import { MonthDaysNumbers, WeekDaysNames, Wrapper } from './styled';

const DaysGrid: FC = () => {
  const daysNamesArray = useMemo(
    () =>
      daysNamesStartsWithSu.map((dayName) => <MonthDay key={dayName} isBold dayValue={dayName} />),
    []
  );
  const daysNumbersArray = useMemo(() => {
    const result = [];
    for (let i = 1; i < 36; i += 1) {
      result.push(<MonthDay key={i} dayValue={i} />);
    }
    return result;
  }, []);

  return (
    <Wrapper>
      <WeekDaysNames>{daysNamesArray}</WeekDaysNames>
      <MonthDaysNumbers>{daysNumbersArray}</MonthDaysNumbers>
    </Wrapper>
  );
};

export default memo(DaysGrid);
