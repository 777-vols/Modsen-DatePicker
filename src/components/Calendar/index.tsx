import React, { FC, memo, useState } from 'react';

import DaysGrid from '@/components/DaysGrid';
import MonthSlider from '@/components/MonthSlider';
import { daysNamesStartsWithMon, daysNamesStartsWithSu } from '@/constants/calendarData';

import Wrapper from './styles';
import IProps from './types';

const Calendar: FC<IProps> = ({
  currentSelectedMonth,
  currentSelectedYear,
  changeCurrentSelectedMonth,
  changeCurrentSelectedYear
}) => {
  const [weekFormat, setWeekFormat] = useState(daysNamesStartsWithMon[0]);

  const changeWeekFormat = () => {
    setWeekFormat((prevState) =>
      prevState === daysNamesStartsWithMon[0] ? daysNamesStartsWithSu[0] : daysNamesStartsWithMon[0]
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
      />
    </Wrapper>
  );
};

export default memo(Calendar);
