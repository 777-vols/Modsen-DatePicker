import React, { FC, memo } from 'react';

import DaysGrid from '@/components/DaysGrid';
import MonthSlider from '@/components/MonthSlider';

import Wrapper from './styles';

const Calendar: FC = () => (
  <Wrapper>
    <MonthSlider />
    <DaysGrid />
  </Wrapper>
);

export default memo(Calendar);
