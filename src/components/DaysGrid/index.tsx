import React, { FC, memo } from 'react';

import CalendarDecorator from '@/decorators/CalendarDecorator';

import { MonthDaysNumbers, WeekDaysNames, WeekDaysNumbers, Wrapper } from './styled';
import IProps from './types';

const DaysGrid: FC<IProps> = ({ form, daysNamesArray, daysNumbersArray }) => (
  <Wrapper>
    <WeekDaysNames>{daysNamesArray}</WeekDaysNames>
    {form === 'year' && <MonthDaysNumbers>{daysNumbersArray}</MonthDaysNumbers>}
    {form === 'month' && <MonthDaysNumbers>{daysNumbersArray}</MonthDaysNumbers>}
    {form === 'week' && <WeekDaysNumbers>{daysNumbersArray}</WeekDaysNumbers>}
  </Wrapper>
);
export default memo(CalendarDecorator(DaysGrid));
