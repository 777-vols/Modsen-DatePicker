/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import RangePicker from './index';

const meta: Meta<typeof RangePicker> = {
  title: 'components/RangePicker',
  component: RangePicker,
  argTypes: {
    defaultRangeStartDate: {
      table: {
        disable: true
      }
    },
    defaultRangeEndDate: {
      table: {
        disable: true
      }
    },
    isWeekendsOn: {
      options: [true, false],
      control: { type: 'radio' }
    },
    isWeekStartsOnMonday: {
      options: [true, false],
      control: { type: 'radio' }
    },
    isRangeCalendarOpen: {
      options: [true, false],
      control: { type: 'radio' }
    },
    isClearButtonVisible: {
      options: [true, false],
      control: { type: 'radio' }
    },
    holidaysColor: { control: 'color' },
    form: {
      options: ['year', 'month', 'week'],
      control: { type: 'radio' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof RangePicker>;

// const rangeStartDay = new Date();
// rangeStartDay.setDate(new Date().getDate() - 20);
// const rangeEndDay = new Date();
// rangeEndDay.setDate(new Date().getDate() + 10);

export const Default: Story = {
  args: {
    form: 'month',
    isWeekendsOn: true,
    isWeekStartsOnMonday: true,
    isRangeCalendarOpen: true,
    isClearButtonVisible: true,
    minDate: new Date(2020, 0, 1),
    maxDate: new Date(2025, 11, 31),
    defaultRangeStartDate: new Date(2023, 9, 10),
    defaultRangeEndDate: new Date(2023, 10, 8)
  },

  render: (args) => {
    const minDate = new Date(args.minDate);
    const maxDate = new Date(args.maxDate);
    const defaultRangeStartDate = new Date(args.defaultRangeStartDate);
    const defaultRangeEndDate = new Date(args.defaultRangeEndDate);
    return (
      <RangePicker
        {...args}
        minDate={minDate}
        maxDate={maxDate}
        defaultRangeStartDate={defaultRangeStartDate}
        defaultRangeEndDate={defaultRangeEndDate}
      />
    );
  }
};
