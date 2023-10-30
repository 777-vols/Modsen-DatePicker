import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { daysNamesStartsWithMonday, daysNamesStartsWithSunday } from '@/constants/calendarData';
import theme from '@/constants/theme';

import Calendar from '.';

describe('Renders the Calendar', () => {
  const onChange = jest.fn();

  it('Check header text', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Calendar
          form="month"
          currentSelectedMonth={9}
          currentSelectedYear={2023}
          activeDay={21}
          holidaysColor={theme.colors.lightRed}
          activeWeekNumber={3}
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 11, 31)}
          rangeStartDate={new Date(2023, 9, 10)}
          rangeEndDate={new Date(2023, 10, 8)}
          isWeekStartsOnMonday
          isWeekendsOn
          isClearButtonVisible={false}
          changeCurrentSelectedMonth={onChange}
          changeCurrentSelectedYear={onChange}
          changeCurrentActiveDay={onChange}
          changeActiveWeekNumber={onChange}
          closeOpenToDoHandler={onChange}
          clearCalendarHandler={onChange}
        />
      </ThemeProvider>
    );

    expect(getByText('October 2023')).toBeInTheDocument();
  });

  it('Check days names start form monday', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <Calendar
          form="month"
          currentSelectedMonth={9}
          currentSelectedYear={2023}
          activeDay={21}
          holidaysColor={theme.colors.lightRed}
          activeWeekNumber={3}
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 11, 31)}
          rangeStartDate={new Date(2023, 9, 10)}
          rangeEndDate={new Date(2023, 10, 8)}
          isWeekStartsOnMonday
          isWeekendsOn
          isClearButtonVisible={false}
          changeCurrentSelectedMonth={onChange}
          changeCurrentSelectedYear={onChange}
          changeCurrentActiveDay={onChange}
          changeActiveWeekNumber={onChange}
          closeOpenToDoHandler={onChange}
          clearCalendarHandler={onChange}
        />
      </ThemeProvider>
    );

    const weekDays = getAllByTestId('weekDayName');
    expect(weekDays).toHaveLength(7);
    weekDays.forEach((weekDay, dayIndex) => {
      expect(weekDay).toHaveTextContent(daysNamesStartsWithMonday[dayIndex]);
    });
  });

  it('Check days names start form sunday', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <Calendar
          form="month"
          currentSelectedMonth={9}
          currentSelectedYear={2023}
          activeDay={21}
          holidaysColor={theme.colors.lightRed}
          activeWeekNumber={3}
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 11, 31)}
          rangeStartDate={new Date(2023, 9, 10)}
          rangeEndDate={new Date(2023, 10, 8)}
          isWeekStartsOnMonday={false}
          isWeekendsOn
          isClearButtonVisible={false}
          changeCurrentSelectedMonth={onChange}
          changeCurrentSelectedYear={onChange}
          changeCurrentActiveDay={onChange}
          changeActiveWeekNumber={onChange}
          closeOpenToDoHandler={onChange}
          clearCalendarHandler={onChange}
        />
      </ThemeProvider>
    );

    const weekDays = getAllByTestId('weekDayName');
    expect(weekDays).toHaveLength(7);
    weekDays.forEach((weekDay, dayIndex) => {
      expect(weekDay).toHaveTextContent(daysNamesStartsWithSunday[dayIndex]);
    });
  });

  it('Check month days count', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <Calendar
          form="month"
          currentSelectedMonth={9}
          currentSelectedYear={2023}
          activeDay={21}
          holidaysColor={theme.colors.lightRed}
          activeWeekNumber={3}
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 11, 31)}
          rangeStartDate={new Date(2023, 9, 10)}
          rangeEndDate={new Date(2023, 10, 8)}
          isWeekStartsOnMonday
          isWeekendsOn
          isClearButtonVisible={false}
          changeCurrentSelectedMonth={onChange}
          changeCurrentSelectedYear={onChange}
          changeCurrentActiveDay={onChange}
          changeActiveWeekNumber={onChange}
          closeOpenToDoHandler={onChange}
          clearCalendarHandler={onChange}
        />
      </ThemeProvider>
    );

    const weekDays = getAllByTestId('monthDay');
    expect(weekDays).toHaveLength(42);
  });
});
