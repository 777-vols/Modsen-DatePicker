import React, { FC, memo } from 'react';

import nextImg from '@/assets/next.svg';
import prevImg from '@/assets/prev.svg';
import { allMonthsNames } from '@/constants/calendarData';

import { ChangeMonthButton, MonthName, Wrapper } from './styled';
import IProps from './types';

const oneMonth = 1;

const MonthSlider: FC<IProps> = ({
  form,
  activeWeekNumber,
  weeksCount,
  changeCurrentSelectedMonth,
  changeCurrentSelectedYear,
  changeActiveWeekNumber,
  currentSelectedMonth,
  currentSelectedYear
}) => {
  const prevMonthHandler = (): void => {
    changeCurrentSelectedMonth(currentSelectedMonth - oneMonth);
  };
  const nextMonthHandler = (): void => {
    changeCurrentSelectedMonth(currentSelectedMonth + oneMonth);
  };

  const prevWeekHandler = (): void => {
    if (activeWeekNumber - 1 < 0 && changeCurrentSelectedMonth(currentSelectedMonth - 1)) {
      changeActiveWeekNumber(weeksCount - 1);
    }
    if (activeWeekNumber - 1 >= 0) {
      changeActiveWeekNumber(activeWeekNumber - 1);
    }
  };
  const nextWeekHandler = (): void => {
    if (activeWeekNumber + 1 > weeksCount && changeCurrentSelectedMonth(currentSelectedMonth + 1)) {
      changeActiveWeekNumber(0);
    }
    if (activeWeekNumber + 1 <= weeksCount) {
      changeActiveWeekNumber(activeWeekNumber + 1);
    }
  };

  if (form === 'month') {
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
  }

  return (
    <Wrapper>
      <ChangeMonthButton onClick={prevWeekHandler}>
        <img src={prevImg} alt="prevMonth" />
      </ChangeMonthButton>
      <MonthName>{`${allMonthsNames[currentSelectedMonth]} ${currentSelectedYear}`}</MonthName>
      <ChangeMonthButton onClick={nextWeekHandler}>
        <img src={nextImg} alt="nextMonth" />
      </ChangeMonthButton>
    </Wrapper>
  );
};

export default memo(MonthSlider);
