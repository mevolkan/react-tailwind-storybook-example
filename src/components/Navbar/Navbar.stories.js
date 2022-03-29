import React from 'react';
import Navbar from './Navbar';

export default {
  title: 'Application/Component Library/Navbar',
  component: Navbar,
  controls: {
    hideNoControlsWarning: true
  }
}

const Template = () => <Navbar />

export const Default = Template.bind({})
Default.parameters = {
  controls: { hideNoControlsWarning: true }
}