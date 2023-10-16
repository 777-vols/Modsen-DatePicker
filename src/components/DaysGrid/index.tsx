import React, { FC, memo, useMemo } from 'react';
import { MonthDaysNumbers, DayName, WeekDaysNames, Wrapper } from './styled';
import { daysNamesStartsWithSu } from '@/constants/calendarData';
import MonthDay from '../CalendarDay';

const DaysGrid: FC = () => {
  const daysNamesArray = useMemo(
    () =>
      daysNamesStartsWithSu.map((dayName) => (
        <MonthDay key={dayName} isBold={true} dayValue={dayName} />
      )),
    [daysNamesStartsWithSu]
  );
  const daysNumbersArray = useMemo(() => {
    let result = [];
    for (let i = 1; i < 36; i++) {
      result.push(<MonthDay dayValue={i} />);
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
