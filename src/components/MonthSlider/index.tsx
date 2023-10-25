import React, { FC, memo } from 'react';

import nextImg from '@/assets/next.svg';
import prevImg from '@/assets/prev.svg';
import { allMonthsNames } from '@/constants/calendarData';

import { ChangeMonthButton, MonthName, Wrapper } from './styled';
import IProps from './types';

const oneMonth = 1;

const MonthSlider: FC<IProps> = ({
  changeCurrentSelectedMonth,
  changeCurrentSelectedYear,
  currentSelectedMonth,
  currentSelectedYear
}) => {
  const prevMonthHandler = (): void => {
    changeCurrentSelectedMonth(currentSelectedMonth - oneMonth);
  };

  const nextMonthHandler = (): void => {
    changeCurrentSelectedMonth(currentSelectedMonth + oneMonth);
  };

  return (
    <Wrapper>
      <ChangeMonthButton onClick={prevMonthHandler}>
        <img src={prevImg} alt="prevMonth" />
      </ChangeMonthButton>
      <MonthName>{`${allMonthsNames[currentSelectedMonth]} ${currentSelectedYear}`}</MonthName>
      <ChangeMonthButton onClick={nextMonthHandler}>
        <img src={nextImg} alt="nextMonth" />
      </ChangeMonthButton>
    </Wrapper>
  );
};

export default memo(MonthSlider);
