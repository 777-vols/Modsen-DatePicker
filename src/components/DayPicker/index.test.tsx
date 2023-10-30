import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@/constants/theme';

import DayPicker from '.';

describe('Renders the DayPicker', () => {
  const onChange = jest.fn();

  it('Show/hide calendar button', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <DayPicker
          form="month"
          title="Test title"
          isWeekendsOn
          isWeekStartsOnMonday
          isClearButtonVisible={false}
          isRangeCalendarOpen
          holidaysColor={theme.colors.lightRed}
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 11, 31)}
          rangeStartDate={new Date(2023, 9, 10)}
          rangeEndDate={new Date(2023, 10, 8)}
          defaultRangeDate={new Date(2023, 9, 10)}
          onChangeRangeDate={onChange}
        />
      </ThemeProvider>
    );

    const title = getByText('Test title');
    expect(title).toBeTruthy();
  });

  it('Show/hide calendar button', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <DayPicker
          form="month"
          title="Test title"
          isWeekendsOn
          isWeekStartsOnMonday
          isClearButtonVisible={false}
          isRangeCalendarOpen
          holidaysColor={theme.colors.lightRed}
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 11, 31)}
          rangeStartDate={new Date(2023, 9, 10)}
          rangeEndDate={new Date(2023, 10, 8)}
          defaultRangeDate={new Date(2023, 9, 10)}
          onChangeRangeDate={onChange}
        />
      </ThemeProvider>
    );

    const button = getByTestId('show-hideButton');
    fireEvent.click(button);
    expect(getByTestId('calendar')).toBeTruthy();
  });

  it('Check prev month button', () => {
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <DayPicker
          form="month"
          title="Test title"
          isWeekendsOn
          isWeekStartsOnMonday
          isClearButtonVisible={false}
          isRangeCalendarOpen
          holidaysColor={theme.colors.lightRed}
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 11, 31)}
          rangeStartDate={new Date(2023, 9, 10)}
          rangeEndDate={new Date(2023, 10, 8)}
          defaultRangeDate={new Date(2023, 9, 10)}
          onChangeRangeDate={onChange}
        />
      </ThemeProvider>
    );

    expect(getByText('October 2023')).toBeInTheDocument();
    const prevMonthButton = getByTestId('prevMonthButton');
    fireEvent.click(prevMonthButton);
    expect(getByText('September 2023')).toBeInTheDocument();
  });

  it('Check next month button', () => {
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <DayPicker
          form="month"
          title="Test title"
          isWeekendsOn
          isWeekStartsOnMonday
          isClearButtonVisible={false}
          isRangeCalendarOpen
          holidaysColor={theme.colors.lightRed}
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 11, 31)}
          rangeStartDate={new Date(2023, 9, 10)}
          rangeEndDate={new Date(2023, 10, 8)}
          defaultRangeDate={new Date(2023, 9, 10)}
          onChangeRangeDate={onChange}
        />
      </ThemeProvider>
    );

    expect(getByText('October 2023')).toBeInTheDocument();
    const nextMonthButton = getByTestId('nextMonthButton');
    fireEvent.click(nextMonthButton);
    expect(getByText('November 2023')).toBeInTheDocument();
  });

  it('Check header date input correct value', () => {
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <DayPicker
          form="month"
          title="Test title"
          isWeekendsOn
          isWeekStartsOnMonday
          isClearButtonVisible={false}
          isRangeCalendarOpen
          holidaysColor={theme.colors.lightRed}
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 11, 31)}
          rangeStartDate={new Date(2023, 9, 10)}
          rangeEndDate={new Date(2023, 10, 8)}
          defaultRangeDate={new Date(2023, 9, 10)}
          onChangeRangeDate={onChange}
        />
      </ThemeProvider>
    );

    const headerInput = getByTestId('headerInput');
    fireEvent.change(headerInput, { target: { value: '10/06/2022' } });
    expect(headerInput).toHaveValue('10/06/2022');
    expect(getByText('June 2022')).toBeInTheDocument();
  });

  it('Check header date input incorrect value', () => {
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <DayPicker
          form="month"
          title="Test title"
          isWeekendsOn
          isWeekStartsOnMonday
          isClearButtonVisible={false}
          isRangeCalendarOpen
          holidaysColor={theme.colors.lightRed}
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 11, 31)}
          rangeStartDate={new Date(2023, 9, 10)}
          rangeEndDate={new Date(2023, 10, 8)}
          defaultRangeDate={new Date(2023, 9, 10)}
          onChangeRangeDate={onChange}
        />
      </ThemeProvider>
    );

    const headerInput = getByTestId('headerInput');
    fireEvent.change(headerInput, { target: { value: '10/15/2022' } });
    expect(headerInput).toHaveValue('10/15/2022');
    expect(getByText('October 2023')).toBeInTheDocument();
    expect(getByText('The entered date is incorrect')).toBeInTheDocument();
  });

  it('Check header date input clear button', () => {
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <DayPicker
          form="month"
          title="Test title"
          isWeekendsOn
          isWeekStartsOnMonday
          isClearButtonVisible={false}
          isRangeCalendarOpen
          holidaysColor={theme.colors.lightRed}
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 11, 31)}
          rangeStartDate={new Date(2023, 9, 10)}
          rangeEndDate={new Date(2023, 10, 8)}
          defaultRangeDate={new Date(2023, 9, 10)}
          onChangeRangeDate={onChange}
        />
      </ThemeProvider>
    );

    const headerInput = getByTestId('headerInput');
    fireEvent.change(headerInput, { target: { value: '10/06/2022' } });
    expect(getByText('June 2022')).toBeInTheDocument();
    const clearInput = getByTestId('clearInput');
    fireEvent.click(clearInput);
    expect(headerInput).toHaveValue('');
  });
});
