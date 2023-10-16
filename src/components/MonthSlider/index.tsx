import React, { FC, memo, useState } from 'react';

import nextImg from '@/assets/next.svg';
import prevImg from '@/assets/prev.svg';
import { allMonthsNames } from '@/constants/calendarData';

import { ChangeMonthButton, MonthName, Wrapper } from './styled';

const MonthSlider: FC = () => {
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  const oneMonth = 1;
  const januaryIndex = 0;
  const decemberIndex = 11;

  const prevMonthHandler = (): void => {
    if (currentMonth > januaryIndex) {
      setCurrentMonth((prevState) => prevState - oneMonth);
    } else {
      setCurrentMonth(decemberIndex);
      setCurrentYear((prevState) => prevState - 1);
    }
  };

  const nextMonthHandler = (): void => {
    if (currentMonth < decemberIndex) {
      setCurrentMonth((prevState) => prevState + oneMonth);
    } else {
      setCurrentMonth(januaryIndex);
      setCurrentYear((prevState) => prevState + 1);
    }
  };

  return (
    <Wrapper>
      <ChangeMonthButton onClick={prevMonthHandler}>
        <img src={prevImg} alt="prevMonth" />
      </ChangeMonthButton>
      <MonthName>{`${allMonthsNames[currentMonth]} ${currentYear}`}</MonthName>
      <ChangeMonthButton onClick={nextMonthHandler}>
        <img src={nextImg} alt="nextMonth" />
      </ChangeMonthButton>
    </Wrapper>
  );
};

export default memo(MonthSlider);
