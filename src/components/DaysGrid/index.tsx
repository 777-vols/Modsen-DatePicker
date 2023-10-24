import React, { FC, memo } from 'react';

import CalendarDecorator from '@/decorators/CalendarDecorator';

import { MonthDaysNumbers, WeekDaysNames, Wrapper } from './styled';
import IProps from './types';

const DaysGrid: FC<IProps> = ({ daysNamesArray, daysNumbersArray }) => (
  <Wrapper>
    <WeekDaysNames>{daysNamesArray}</WeekDaysNames>
    <MonthDaysNumbers>{daysNumbersArray}</MonthDaysNumbers>
  </Wrapper>
);

export default memo(CalendarDecorator(DaysGrid));
