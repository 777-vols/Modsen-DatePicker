import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@/constants/theme';

import CalendarDay from '.';

describe('Calendar day', () => {
  it('renders the correct Calendar day title', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <CalendarDay dayNumber={21} isCurrentDay={false} isWeekend={false} />
      </ThemeProvider>
    );
    const title = getByText('21');

    expect(title).toBeInTheDocument();
  });
});
