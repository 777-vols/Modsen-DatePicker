import React, { FC, memo, useState } from 'react';

import DaysGrid from '@/components/DaysGrid';
import MonthSlider from '@/components/MonthSlider';
import { daysNamesStartsWithMon, daysNamesStartsWithSu } from '@/constants/calendarData';

import Wrapper from './styles';

const oneDay = 1;
const oneYear = 1;
const januaryIndex = 1;
const decemberIndex = 12;

const Calendar: FC = () => {
  const [currentSelectedMonth, setCurrentSelectedMonth] = useState(new Date().getMonth() + oneDay);
  const [currentSelectedYear, setCurrentSelectedYear] = useState(new Date().getFullYear());
  const [weekFormat, setWeekFormat] = useState(daysNamesStartsWithMon[0]);

  const changeWeekFormat = () => {
    setWeekFormat((prevState) =>
      prevState === daysNamesStartsWithMon[0] ? daysNamesStartsWithSu[0] : daysNamesStartsWithMon[0]
    );
  };

  const changeCurrentSelectedMonth = (newMonth: number) => {
    if (newMonth < januaryIndex) {
      setCurrentSelectedMonth(decemberIndex);
      setCurrentSelectedYear((prevState) => prevState - oneYear);
    } else if (newMonth > decemberIndex) {
      setCurrentSelectedMonth(januaryIndex);
      setCurrentSelectedYear((prevState) => prevState + oneYear);
    } else {
      setCurrentSelectedMonth(newMonth);
    }
  };

  const changeCurrentSelectedYear = (newYear: number) => {
    setCurrentSelectedYear(newYear);
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
