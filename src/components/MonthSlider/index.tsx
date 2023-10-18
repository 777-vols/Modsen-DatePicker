import React, { FC, memo, useState } from 'react';

import nextImg from '@/assets/next.svg';
import prevImg from '@/assets/prev.svg';
import { allMonthsNames } from '@/constants/calendarData';

import { ChangeMonthButton, MonthName, Wrapper } from './styled';
import InterfaceProps from './types';

const MonthSlider: FC<InterfaceProps> = (props) => {
  const {
    changeCurrentSelectedMonth,
    changeCurrentSelectedYear,
    currentSelectedMonth,
    currentSelectedYear
  } = props;

  const oneMonth = 1;

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
      <MonthName>{`${
        allMonthsNames[currentSelectedMonth - oneMonth]
      } ${currentSelectedYear}`}</MonthName>
      <ChangeMonthButton onClick={nextMonthHandler}>
        <img src={nextImg} alt="nextMonth" />
      </ChangeMonthButton>
    </Wrapper>
  );
};

export default memo(MonthSlider);
