import React from 'react';
import { type Meta, type StoryFn } from '@storybook/react';
import Button from './index';

const obj: Meta<typeof Button> = {
  title: 'Button',
  component: Button
};

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  color: 'red',
  handleClick: () => {
    alert('Primary button');
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  color: 'red',
  handleClick: () => {
    alert('Secondary button');
  }
};

export default obj;
