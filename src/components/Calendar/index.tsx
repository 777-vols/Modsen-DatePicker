import React, { FC, memo } from 'react';

import DaysGrid from '@/components/DaysGrid';
import MonthSlider from '@/components/MonthSlider';

import Wrapper from './styles';
import IProps from './types';

const Calendar: FC<IProps> = ({
  currentSelectedMonth,
  currentSelectedYear,
  changeCurrentSelectedMonth,
  changeCurrentSelectedYear,
  activeDay,
  changeCurrentActiveDay,
  closeOpenToDoHandler,
  isWeekStartsOnMonday
}) => (
  <Wrapper>
    <MonthSlider
      currentSelectedMonth={currentSelectedMonth}
      currentSelectedYear={currentSelectedYear}
      changeCurrentSelectedMonth={changeCurrentSelectedMonth}
      changeCurrentSelectedYear={changeCurrentSelectedYear}
    />
    <DaysGrid
      currentSelectedMonth={currentSelectedMonth}
      currentSelectedYear={currentSelectedYear}
      isWeekStartsOnMonday={isWeekStartsOnMonday}
      activeDay={activeDay}
      changeCurrentActiveDay={changeCurrentActiveDay}
      closeOpenToDoHandler={closeOpenToDoHandler}
    />
  </Wrapper>
);

export default memo(Calendar);
