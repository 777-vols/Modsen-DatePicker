import React, { FC, memo, useState } from 'react';

import DaysGrid from '@/components/DaysGrid';
import MonthSlider from '@/components/MonthSlider';
import { daysNamesStartsWithMonday, daysNamesStartsWithSunday } from '@/constants/calendarData';

import Wrapper from './styles';
import IProps from './types';

const Calendar: FC<IProps> = ({
  currentSelectedMonth,
  currentSelectedYear,
  changeCurrentSelectedMonth,
  changeCurrentSelectedYear,
  activeDay,
  changeCurrentActiveDay,
  closeOpenToDoHandler
}) => {
  const [weekFormat, setWeekFormat] = useState(daysNamesStartsWithMonday[0]);

  const changeWeekFormat = () => {
    setWeekFormat((prevState) =>
      prevState === daysNamesStartsWithMonday[0]
        ? daysNamesStartsWithSunday[0]
        : daysNamesStartsWithMonday[0]
    );
  };

  return (
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
        weekFormat={weekFormat}
        changeWeekFormat={changeWeekFormat}
        activeDay={activeDay}
        changeCurrentActiveDay={changeCurrentActiveDay}
        closeOpenToDoHandler={closeOpenToDoHandler}
      />
    </Wrapper>
  );
};

export default memo(Calendar);
