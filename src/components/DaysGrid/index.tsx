import React, { memo, useMemo } from 'react';
import { MonthDaysNumbers, DayName, WeekDaysNames, Wrapper } from './styled';
import { daysNamesStartsWithSu } from '@/constants/calendarData';
import MonthDay from './MonthDay';

const DaysGrid = memo(function DaysGrid() {
  const daysNamesArray = useMemo(
    () =>
      daysNamesStartsWithSu.map((dayName) => <MonthDay dayNumberValue={dayName} key={dayName} />),
    [daysNamesStartsWithSu]
  );
  const daysNumbersArray = useMemo(() => {
    let result = [];
    for (let i = 1; i < 36; i++) {
      result.push(<MonthDay dayNumberValue={i} />);
    }
    return result;
  }, []);

  return (
    <Wrapper>
      <WeekDaysNames>{daysNamesArray}</WeekDaysNames>
      <MonthDaysNumbers>{daysNumbersArray}</MonthDaysNumbers>
    </Wrapper>
  );
});

export default DaysGrid;
