import React, { FC, memo, useMemo } from 'react';
import ReactSelect from 'react-select';

import nextImg from '@/assets/next.svg';
import prevImg from '@/assets/prev.svg';
import { allMonthsNames } from '@/constants/calendarData';
import { getWeeksCount, getYearsOptionsArray } from '@/helpers/calendarHelpers';

import { ChangeMonthButton, MonthName, Panel, Wrapper } from './styled';
import IProps from './types';

const oneMonth = 1;

const MonthSlider: FC<IProps> = ({
  form,
  activeWeekNumber,
  minDate,
  maxDate,
  changeCurrentSelectedMonth,
  changeCurrentSelectedYear,
  changeActiveWeekNumber,
  currentSelectedMonth,
  currentSelectedYear,
  isWeekStartsOnMonday,
  isWeekendsOn
}) => {
  const weeksCount = useMemo(
    () =>
      getWeeksCount(currentSelectedMonth, currentSelectedYear, isWeekStartsOnMonday, isWeekendsOn),
    [currentSelectedMonth, currentSelectedYear, isWeekStartsOnMonday, isWeekendsOn]
  );

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

  type OptionType = {
    value: number;
    label: number;
  };

  const selectHandler = (option: OptionType | null) => {
    if (option) changeCurrentSelectedYear(option.value);
  };

  if (form === 'year') {
    const selectOptions = getYearsOptionsArray(minDate, maxDate);
    return (
      <Wrapper data-testid="prevMonthButton">
        <ChangeMonthButton onClick={prevMonthHandler}>
          <img src={prevImg} alt="prevMonth" />
        </ChangeMonthButton>
        <Panel>
          <MonthName>{`${allMonthsNames[currentSelectedMonth]}`}</MonthName>
          <ReactSelect
            id="year-select"
            onChange={selectHandler}
            maxMenuHeight={200}
            defaultValue={{ value: 2023, label: 2023 }}
            options={selectOptions}
          />
        </Panel>
        <ChangeMonthButton data-testid="nextMonthButton" onClick={nextMonthHandler}>
          <img src={nextImg} alt="nextMonth" />
        </ChangeMonthButton>
      </Wrapper>
    );
  }

  if (form === 'month') {
    return (
      <Wrapper data-testid="prevMonthButton">
        <ChangeMonthButton onClick={prevMonthHandler}>
          <img src={prevImg} alt="prevMonth" />
        </ChangeMonthButton>
        <MonthName>{`${allMonthsNames[currentSelectedMonth]} ${currentSelectedYear}`}</MonthName>
        <ChangeMonthButton data-testid="nextMonthButton" onClick={nextMonthHandler}>
          <img src={nextImg} alt="nextMonth" />
        </ChangeMonthButton>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <ChangeMonthButton data-testid="prevWeekButton" onClick={prevWeekHandler}>
        <img src={prevImg} alt="prevMonth" />
      </ChangeMonthButton>
      <MonthName>{`${allMonthsNames[currentSelectedMonth]} ${currentSelectedYear}`}</MonthName>
      <ChangeMonthButton data-testid="nextWeekButton" onClick={nextWeekHandler}>
        <img src={nextImg} alt="nextMonth" />
      </ChangeMonthButton>
    </Wrapper>
  );
};

export default memo(MonthSlider);
