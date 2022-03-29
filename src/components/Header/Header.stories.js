import React from 'react';
import Header from './Header';

export default {
    title: 'Application/Component Library/Header',
    component: Header,
    controls: {
        hideNoControlsWarning: true
    }
}

const Template = () => <Header />

export const Default = Template.bind({})
Default.parameters = {
    controls: { hideNoControlsWarning: true }
}