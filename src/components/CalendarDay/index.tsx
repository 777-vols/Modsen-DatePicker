import React, { FC, memo } from 'react';

import { DayNumber, Wrapper } from './styled';
import IProps from './types';

const CalendarDay: FC<IProps> = ({ dayValue, isBold, isHoliday }) => (
  <Wrapper>
    <DayNumber $isHoliday={isHoliday} $bold={isBold}>
      {dayValue}
    </DayNumber>
  </Wrapper>
);

export default memo(CalendarDay);
