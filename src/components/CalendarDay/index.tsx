import React, { FC, memo } from 'react';

import { DayNumber, Wrapper } from './styled';
import InterfaceProps from './types';

const CalendarDay: FC<InterfaceProps> = ({ dayValue, isBold }) => (
  <Wrapper>
    <DayNumber $bold={isBold}>{dayValue}</DayNumber>
  </Wrapper>
);

export default memo(CalendarDay);
