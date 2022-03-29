import React from 'react';
import Footer from './Footer';

export default {
  title: 'Application/Component Library/Footer',
  component: Footer,
  controls: {
    hideNoControlsWarning: true
  }
}

const Template = () => <Footer />

export const Default = Template.bind({})
Default.parameters = {
  controls: { hideNoControlsWarning: true }
}