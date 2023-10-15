import React, { memo } from 'react';

import HeaderInput from '@/components/HeaderInput';
import { Wrapper } from './styles';
import InterfaceProps from './types';

const Calendar = memo(function Calendar({ value, inputHandler }: InterfaceProps) {
  return (
    <Wrapper>
      <HeaderInput value={value} inputHandler={inputHandler} />
    </Wrapper>
  );
});

export default Calendar;
