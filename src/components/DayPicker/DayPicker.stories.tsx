import type { Meta, StoryObj } from '@storybook/react';

import DayPicker from './index';

const meta: Meta<typeof DayPicker> = {
  title: 'components/DayPicker',
  component: DayPicker,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof DayPicker>;

export const Default: Story = {
  args: {
    value: '01/02/2020'
  }
};
