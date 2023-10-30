import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@/constants/theme';

import RangePicker from '.';

describe('Renders the RangePicker', () => {
  it('Checks the number of elements on the page', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <RangePicker
          form="month"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 11, 31)}
          holidaysColor={theme.colors.lightRed}
          isClearButtonVisible
          isWeekStartsOnMonday
          isRangeCalendarOpen
          isWeekendsOn
          defaultRangeStartDate={new Date(2023, 9, 10)}
          defaultRangeEndDate={new Date(2023, 10, 8)}
        />
      </ThemeProvider>
    );

    expect(getAllByTestId('calendar')).toHaveLength(2);
    expect(getAllByTestId('clearButton')).toHaveLength(2);
  });
});
