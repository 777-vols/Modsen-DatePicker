import React, { FC, memo } from 'react';

import DaysGrid from '@/components/DaysGrid';
import MonthSlider from '@/components/MonthSlider';

import config from './config';
import { ClearButton, Wrapper } from './styles';
import IProps from './types';

const { buttonText } = config;

const Calendar: FC<IProps> = ({
  form,
  maxDate,
  minDate,
  rangeStartDate,
  rangeEndDate,
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
  isClearButtonVisible,
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
      rangeStartDate={rangeStartDate}
      rangeEndDate={rangeEndDate}
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
    {isClearButtonVisible && <ClearButton>{buttonText}</ClearButton>}
  </Wrapper>
);

export default memo(Calendar);
