import React, { memo } from 'react';
import nextImg from '@/assets/next.svg';
import prevImg from '@/assets/prev.svg';
import { ChangeMonthButton, MonthName, Wrapper } from './styled';

const MonthSlider = memo(function MonthSlider() {
  return (
    <Wrapper>
      <ChangeMonthButton>
        <img src={prevImg} alt="prevMonth" />
      </ChangeMonthButton>
      <MonthName>November 2022</MonthName>
      <ChangeMonthButton>
        <img src={nextImg} alt="nextMonth" />
      </ChangeMonthButton>
    </Wrapper>
  );
});

export default MonthSlider;
