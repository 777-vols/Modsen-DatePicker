import React, { FC, memo, useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import DayPicker from '@/components/DayPicker';
import GlobalStyle from '@/constants/styles/globalStyle';
import theme from '@/constants/theme';

import Wrapper from './styled';
import IProps from './types';

const RangePicker: FC<IProps> = ({
  defaultRangeStartDate,
  defaultRangeEndDate,
  isWeekendsOn,
  isRangeCalendarOpen,
  isWeekStartsOnMonday,
  isClearButtonVisible,
  holidaysColor,
  minDate,
  maxDate,
  form
}) => {
  const [rangeStartDate, setRangeStartDate] = useState<Date>(defaultRangeStartDate);
  const [rangeEndDate, setRangeEndDate] = useState<Date>(defaultRangeEndDate);
  const onChangeRangeStartDate = useCallback(
    (newDate: Date) => {
      if (newDate < rangeEndDate) {
        setRangeStartDate(newDate);
      }
    },
    [rangeEndDate]
  );
  const onChangeRangeEndDate = useCallback(
    (newDate: Date) => {
      if (newDate > rangeStartDate) {
        setRangeEndDate(newDate);
      }
    },
    [rangeStartDate]
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <DayPicker
          title="From"
          form={form}
          isWeekendsOn={isWeekendsOn}
          holidaysColor={holidaysColor}
          isWeekStartsOnMonday={isWeekStartsOnMonday}
          isClearButtonVisible={isClearButtonVisible}
          isRangeCalendarOpen={isRangeCalendarOpen}
          minDate={minDate}
          maxDate={maxDate}
          defaultRangeDate={defaultRangeStartDate}
          rangeStartDate={rangeStartDate}
          rangeEndDate={rangeEndDate}
          onChangeRangeDate={onChangeRangeStartDate}
        />
        <DayPicker
          title="To"
          form={form}
          isWeekendsOn={isWeekendsOn}
          holidaysColor={holidaysColor}
          isWeekStartsOnMonday={isWeekStartsOnMonday}
          isClearButtonVisible={isClearButtonVisible}
          isRangeCalendarOpen={isRangeCalendarOpen}
          minDate={minDate}
          maxDate={maxDate}
          defaultRangeDate={defaultRangeEndDate}
          rangeStartDate={rangeStartDate}
          rangeEndDate={rangeEndDate}
          onChangeRangeDate={onChangeRangeEndDate}
        />
      </Wrapper>
    </ThemeProvider>
  );
};

export default memo(RangePicker);
