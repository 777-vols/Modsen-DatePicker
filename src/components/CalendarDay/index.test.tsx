import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@/constants/theme';

import CalendarDay from '.';

describe('Default Calendar day', () => {
  it('Renders the default day', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CalendarDay dayNumber={21} isBold />
      </ThemeProvider>
    );

    const day = getByTestId('monthDay');
    expect(day).toBeInTheDocument();
    expect(getByText(21)).toBeInTheDocument();
    expect(day).toHaveStyleRule('border-radius', '5px');
    expect(day).toHaveStyleRule('background', 'transparent');
    expect(day).toHaveStyleRule('font-size', `${theme.fontSize.mediumL}`);
    expect(day).toHaveStyleRule('border', 'none');
    expect(day).toHaveStyleRule('font-weight', `${theme.fontWeight.l}`);
  });
});

describe('Prev/Next month Calendar day', () => {
  it('Renders Prev/Next month day', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CalendarDay dayNumber={21} />
      </ThemeProvider>
    );

    const day = getByTestId('monthDay');
    expect(day).toBeInTheDocument();
    expect(getByText(21)).toBeInTheDocument();
    expect(day).toHaveStyleRule('border-radius', '5px');
    expect(day).toHaveStyleRule('background', 'transparent');
    expect(day).toHaveStyleRule('font-size', `${theme.fontSize.mediumM}`);
    expect(day).toHaveStyleRule('border', 'none');
  });
});

describe('Holiday Calendar day', () => {
  it('Renders the holiday day', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CalendarDay dayNumber={21} isHoliday />
      </ThemeProvider>
    );

    const day = getByTestId('monthDay');
    expect(day).toBeInTheDocument();
    expect(getByText(21)).toBeInTheDocument();
    expect(day).toHaveStyleRule('border-radius', '5px');
    expect(day).toHaveStyleRule('background', `${theme.colors.lightRed}`);
    expect(day).toHaveStyleRule('border', 'none');
  });
});

describe('Active Calendar day', () => {
  it('Renders the active day', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CalendarDay dayNumber={21} activeDay={21} />
      </ThemeProvider>
    );

    const day = getByTestId('monthDay');
    expect(day).toBeInTheDocument();
    expect(getByText(21)).toBeInTheDocument();
    expect(day).toHaveStyleRule('border-radius', '5px');
    expect(day).toHaveStyleRule('background', `${theme.colors.blue}`);
    expect(day).toHaveStyleRule('border', 'none');
    expect(day).toHaveStyleRule('color', `${theme.colors.white}`);
    expect(day).toHaveStyleRule('font-size', `${theme.fontSize.mediumXL}`);
  });
});

describe('Active Calendar day', () => {
  it('Renders the active day', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CalendarDay dayNumber={21} activeDay={21} />
      </ThemeProvider>
    );

    const day = getByTestId('monthDay');
    expect(day).toBeInTheDocument();
    expect(getByText(21)).toBeInTheDocument();
    expect(day).toHaveStyleRule('border-radius', '5px');
    expect(day).toHaveStyleRule('background', `${theme.colors.blue}`);
    expect(day).toHaveStyleRule('border', 'none');
    expect(day).toHaveStyleRule('color', `${theme.colors.white}`);
    expect(day).toHaveStyleRule('font-size', `${theme.fontSize.mediumXL}`);
  });
});

describe('Active Calendar day', () => {
  it('Renders the active day', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CalendarDay dayNumber={21} activeDay={21} />
      </ThemeProvider>
    );

    const day = getByTestId('monthDay');
    expect(day).toBeInTheDocument();
    expect(getByText(21)).toBeInTheDocument();
    expect(day).toHaveStyleRule('border-radius', '5px');
    expect(day).toHaveStyleRule('background', `${theme.colors.blue}`);
    expect(day).toHaveStyleRule('border', 'none');
    expect(day).toHaveStyleRule('color', `${theme.colors.white}`);
    expect(day).toHaveStyleRule('font-size', `${theme.fontSize.mediumXL}`);
  });
});

describe('Current Calendar day', () => {
  it('Renders the current day', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CalendarDay dayNumber={21} isCurrentDay />
      </ThemeProvider>
    );

    const day = getByTestId('monthDay');
    expect(day).toBeInTheDocument();
    expect(getByText(21)).toBeInTheDocument();
    expect(day).toHaveStyleRule('border-radius', '5px');
    expect(day).toHaveStyleRule('background', 'transparent');
    expect(day).toHaveStyleRule('border', `2px solid ${theme.colors.blue}`);
  });
});

describe('Included in range Calendar day', () => {
  it('Renders the day included in range', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CalendarDay dayNumber={21} isIncludeInRange />
      </ThemeProvider>
    );

    const day = getByTestId('monthDay');
    expect(day).toBeInTheDocument();
    expect(getByText(21)).toBeInTheDocument();
    expect(day).toHaveStyleRule('border-radius', '0px');
    expect(day).toHaveStyleRule('background', `${theme.colors.grey}`);
  });
});

describe('Active range start Calendar day', () => {
  it('Renders active range start day', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CalendarDay dayNumber={21} activeDay={21} rangeStart />
      </ThemeProvider>
    );

    const day = getByTestId('monthDay');
    expect(day).toBeInTheDocument();
    expect(getByText(21)).toBeInTheDocument();
    expect(day).toHaveStyleRule('border-radius', '0px');
    expect(day).toHaveStyleRule('border-top-left-radius', '5px');
    expect(day).toHaveStyleRule('border-bottom-left-radius', '5px');
    expect(day).toHaveStyleRule('background', `${theme.colors.blue}`);
    expect(day).toHaveStyleRule('opacity', '1');
  });
});

describe('Active range end Calendar day', () => {
  it('Renders active range end day', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CalendarDay dayNumber={21} activeDay={21} rangeEnd />
      </ThemeProvider>
    );

    const day = getByTestId('monthDay');
    expect(day).toBeInTheDocument();
    expect(getByText(21)).toBeInTheDocument();
    expect(day).toHaveStyleRule('border-radius', '0px');
    expect(day).toHaveStyleRule('border-top-right-radius', '5px');
    expect(day).toHaveStyleRule('border-bottom-right-radius', '5px');
    expect(day).toHaveStyleRule('background', `${theme.colors.blue}`);
    expect(day).toHaveStyleRule('opacity', '1');
  });
});
