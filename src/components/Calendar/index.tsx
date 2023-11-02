import React, { FC, memo } from 'react';

import DaysGrid from '@/components/DaysGrid';
import MonthSlider from '@/components/MonthSlider';

import { config } from './config';
import { ClearButton, Clue, Wrapper } from './styles';
import { IProps } from './types';

const { buttonText, clueText } = config;

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
  clearCalendarHandler,
  isWeekStartsOnMonday,
  isClearButtonVisible,
  isWeekendsOn,
  holidaysColor
}) => (
  <Wrapper data-testid="calendar">
    <MonthSlider
      form={form}
      minDate={minDate}
      maxDate={maxDate}
      isWeekStartsOnMonday={isWeekStartsOnMonday}
      isWeekendsOn={isWeekendsOn}
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
    {!(rangeStartDate && rangeEndDate) && <Clue>{clueText}</Clue>}
    {isClearButtonVisible && (
      <ClearButton data-testid="clearButton" onClick={clearCalendarHandler}>
        {buttonText}
      </ClearButton>
    )}
  </Wrapper>
);

export default memo(Calendar);
