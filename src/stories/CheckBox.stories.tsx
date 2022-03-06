import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { CheckBox } from '../components/CheckBox';

export default {
    title: 'CheckBox',
    component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

const defaultProps = {
    label: "CheckBox"
}

export const Default = Template.bind({});
Default.args = {
    ...defaultProps
};

export const Checked = Template.bind({});
Checked.args = {
    ...defaultProps,
    checked: true
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...defaultProps,
    disabled: true
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
    ...defaultProps,
    disabled: true,
    checked: true,
};