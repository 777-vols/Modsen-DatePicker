import React, { FC, memo } from 'react';
import nextImg from '@/assets/next.svg';
import prevImg from '@/assets/prev.svg';
import { ChangeMonthButton, MonthName, Wrapper } from './styled';

const MonthSlider: FC = () => {
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
};

export default memo(MonthSlider);
