import React from 'react';
import Form from './Form';

export default {
  title: 'Application/Component Library/Form',
  component: Form,
  controls: {
    hideNoControlsWarning: true
  }
}

const Template = () => <Form />

export const Default = Template.bind({})
Default.parameters = {
  controls: { hideNoControlsWarning: true }
}