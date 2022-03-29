import React from 'react';
import Feature from './Feature';

export default {
  title: 'Application/Component Library/Feature',
  component: Feature,
  controls: {
    hideNoControlsWarning: true
  }
}

const Template = () => <Feature />

export const Default = Template.bind({})
Default.parameters = {
  controls: { hideNoControlsWarning: true }
}