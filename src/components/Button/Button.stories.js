import React from 'react';
import Button from './Button';

export default {
  title: 'Application/Component Library/Button',
  component: 'Button',
  controls: {
    hideNoControlsWarning: true
  },
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  children: "Click me",
  className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
}

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: "Disabled",
  className: 'bg-blue-500 text-white font-bold py-2 px-4 rounded'
}

