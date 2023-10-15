import React, { memo } from 'react';
import { DayNumber, Wrapper } from './styled';
import InterfaceProps from './types';

const MonthDay = memo(function MonthDay({ dayNumberValue }: InterfaceProps) {
  return (
    <Wrapper>
      <DayNumber>{dayNumberValue}</DayNumber>
    </Wrapper>
  );
});

export default MonthDay;
