import React, { FC, memo } from 'react';

import DaysGrid from '@/components/DaysGrid';
import MonthSlider from '@/components/MonthSlider';

import Wrapper from './styles';
import IProps from './types';

const Calendar: FC<IProps> = ({
  form,
  maxDate,
  minDate,
  currentSelectedMonth,
  currentSelectedYear,
  changeCurrentSelectedMonth,
  changeCurrentSelectedYear,
  activeDay,
  activeWeekNumber,
  changeActiveWeekNumber,
  changeCurrentActiveDay,
  closeOpenToDoHandler,
  isWeekStartsOnMonday,
  isWeekendsOn,
  holidaysColor
}) => (
  <Wrapper>
    <MonthSlider
      form={form}
      minDate={minDate}
      maxDate={maxDate}
      activeWeekNumber={activeWeekNumber}
      changeActiveWeekNumber={changeActiveWeekNumber}
      currentSelectedMonth={currentSelectedMonth}
      currentSelectedYear={currentSelectedYear}
      changeCurrentSelectedMonth={changeCurrentSelectedMonth}
      changeCurrentSelectedYear={changeCurrentSelectedYear}
    />
    <DaysGrid
      form={form}
      activeWeekNumber={activeWeekNumber}
      currentSelectedMonth={currentSelectedMonth}
      currentSelectedYear={currentSelectedYear}
      isWeekStartsOnMonday={isWeekStartsOnMonday}
      isWeekendsOn={isWeekendsOn}
      holidaysColor={holidaysColor}
      activeDay={activeDay}
      changeActiveWeekNumber={changeActiveWeekNumber}
      changeCurrentActiveDay={changeCurrentActiveDay}
      closeOpenToDoHandler={closeOpenToDoHandler}
    />
  </Wrapper>
);

export default memo(Calendar);
