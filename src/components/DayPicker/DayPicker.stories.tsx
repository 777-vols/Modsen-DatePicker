/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import DayPicker from './index';

const meta: Meta<typeof DayPicker> = {
  title: 'components/DayPicker',
  component: DayPicker,
  argTypes: {
    isWeekendsOn: {
      options: [true, false],
      control: { type: 'radio' }
    },
    isWeekStartsOnMonday: {
      options: [true, false],
      control: { type: 'radio' }
    },
    holidaysColor: { control: 'color' },
    form: {
      options: ['year', 'month', 'week'],
      control: { type: 'radio' }
    },
    onChangeRangeDate: {
      table: {
        disable: true
      }
    },
    rangeStartDate: {
      table: {
        disable: true
      }
    },
    rangeEndDate: {
      table: {
        disable: true
      }
    },
    defaultRangeDate: {
      table: {
        disable: true
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof DayPicker>;

export const Default: Story = {
  args: {
    form: 'month',
    isWeekendsOn: true,
    isWeekStartsOnMonday: true,
    minDate: new Date(2020, 0, 1),
    maxDate: new Date(2025, 11, 31)
  },

  render: (args) => {
    const minDate = new Date(args.minDate);
    const maxDate = new Date(args.maxDate);
    return <DayPicker {...args} minDate={minDate} maxDate={maxDate} />;
  }
};
