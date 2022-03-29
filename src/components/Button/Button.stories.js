import React from 'react';
import Button from './Button';

export default {
  title: 'Application/Component Library/Button',
  component: Button,
  controls: {
    hideNoControlsWarning: true
  }
}

const Template = () => <Button />

export const Default = Template.bind({})
Default.parameters = {
  controls: { hideNoControlsWarning: true }
}