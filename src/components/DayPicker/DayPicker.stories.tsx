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
    holidaysColor: { control: 'color' }
  }
};

export default meta;

type Story = StoryObj<typeof DayPicker>;

export const Default: Story = {
  args: {
    isWeekendsOn: true,
    isWeekStartsOnMonday: true
  },

  render: (args) => <DayPicker {...args} />
};
