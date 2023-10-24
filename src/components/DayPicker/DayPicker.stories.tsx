/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import DayPicker from './index';

const meta: Meta<typeof DayPicker> = {
  title: 'components/DayPicker',
  component: DayPicker,
  argTypes: {
    isWeekStartsOnMonday: {
      options: [true, false],
      control: { type: 'radio' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof DayPicker>;

export const Default: Story = {
  args: {
    isWeekStartsOnMonday: true
  },

  render: (args) => <DayPicker {...args} />
};
