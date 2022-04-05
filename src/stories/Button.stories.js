import React from 'react';

import Btn from '../components/Button';

export default {
    title: 'Basic/Button',
    component: Btn,
}

const Template = (args) => <Btn {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: "Primary",
    Icon: false,
    variant: "contained",
};


export const Secondary = Template.bind({});
Secondary.args = {
    text: "Secondary",
    Icon: false,
    variant: "outlined",
};