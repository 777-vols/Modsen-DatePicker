import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@/constants/theme';

import ToDoWindow from '.';

describe('Renders the ToDo window', () => {
  const onChange = jest.fn();

  it('Checks the the title of todo window', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ToDoWindow
          closeOpenToDoHandler={onChange}
          activeDay={15}
          currentSelectedMonth={9}
          currentSelectedYear={2023}
        />
      </ThemeProvider>
    );

    expect(getByText('15 October 2023')).toBeInTheDocument();
  });

  it('Check the possibility to add a new todo', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ToDoWindow
          closeOpenToDoHandler={onChange}
          activeDay={15}
          currentSelectedMonth={9}
          currentSelectedYear={2023}
        />
      </ThemeProvider>
    );

    expect(getByPlaceholderText('Type new toDo')).toBeInTheDocument();
    expect(getByTestId('addToDo')).toBeInTheDocument();
    expect(getByTestId('clearToDoInput')).toBeInTheDocument();
  });

  it('Check the possibility to close window', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ToDoWindow
          closeOpenToDoHandler={onChange}
          activeDay={15}
          currentSelectedMonth={9}
          currentSelectedYear={2023}
        />
      </ThemeProvider>
    );

    expect(getByTestId('closeToDoWindow')).toBeInTheDocument();
  });
});
