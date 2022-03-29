import React from 'react';
import Hero from './Hero';

export default {
  title: 'Application/Component Library/Hero',
  component: Hero,
  controls: {
    hideNoControlsWarning: true
  }
}

const Template = () => <Hero />

export const Default = Template.bind({})
Default.parameters = {
  controls: { hideNoControlsWarning: true }
}