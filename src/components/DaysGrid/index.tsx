import React, { FC, memo } from 'react';

import CalendarDecorator from '@/decorators/CalendarDecorator';

import { MonthDaysNumbers, WeekDaysNames, Wrapper } from './styled';
import InterfaceProps from './types';

const DaysGrid: FC<InterfaceProps> = (props) => {
  const { daysNamesArray, daysNumbersArray, changeWeekFormat } = props;

  return (
    <Wrapper>
      <WeekDaysNames onClick={changeWeekFormat}>{daysNamesArray}</WeekDaysNames>
      <MonthDaysNumbers>{daysNumbersArray}</MonthDaysNumbers>
    </Wrapper>
  );
};

export default memo(CalendarDecorator(DaysGrid));
