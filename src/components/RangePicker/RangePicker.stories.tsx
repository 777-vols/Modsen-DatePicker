/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import RangePicker from './index';

const meta: Meta<typeof RangePicker> = {
  title: 'components/RangePicker',
  component: RangePicker,
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
    }
  }
};

export default meta;

type Story = StoryObj<typeof RangePicker>;

export const Default: Story = {
  args: {
    form: 'month',
    isWeekendsOn: true,
    isWeekStartsOnMonday: true,
    minDate: new Date(2010, 0, 1),
    maxDate: new Date(2030, 11, 31)
  },

  render: (args) => <RangePicker {...args} />
};
