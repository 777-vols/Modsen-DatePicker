import React, { FC, memo } from 'react';

import { Wrapper } from './styles';
import InterfaceProps from './types';
import MonthSlider from '@/components/MonthSlider';
import DaysGrid from '../DaysGrid';

const Calendar: FC = () => {
  return (
    <Wrapper>
      <MonthSlider />
      <DaysGrid />
    </Wrapper>
  );
};

export default memo(Calendar);
