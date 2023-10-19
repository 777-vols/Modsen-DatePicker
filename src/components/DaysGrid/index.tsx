import React, { FC, memo } from 'react';

import CalendarDecorator from '@/decorators/CalendarDecorator';

import { MonthDaysNumbers, WeekDaysNames, Wrapper } from './styled';
import IProps from './types';

const DaysGrid: FC<IProps> = ({ daysNamesArray, daysNumbersArray, changeWeekFormat }) => (
  <Wrapper>
    <WeekDaysNames onClick={changeWeekFormat}>{daysNamesArray}</WeekDaysNames>
    <MonthDaysNumbers>{daysNumbersArray}</MonthDaysNumbers>
  </Wrapper>
);

export default memo(CalendarDecorator(DaysGrid));
