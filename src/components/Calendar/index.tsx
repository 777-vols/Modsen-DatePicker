import React, { memo } from 'react';

import { Wrapper } from './styles';
import InterfaceProps from './types';
import MonthSlider from '@/components/MonthSlider';
import DaysGrid from '../DaysGrid';

const Calendar = memo(function Calendar() {
  return (
    <Wrapper>
      <MonthSlider />
      <DaysGrid />
    </Wrapper>
  );
});

export default Calendar;
