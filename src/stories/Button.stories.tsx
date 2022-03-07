import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button } from '../components/Button';

export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const defaultProps = {
    children: "Button"
}

export const Primary = Template.bind({});
Primary.args = {
    ...defaultProps,
    appearance: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
    ...defaultProps,
    appearance: "secondary"
};

export const Success = Template.bind({});
Success.args = {
    ...defaultProps,
    appearance: "success"
};

export const Warning = Template.bind({});
Warning.args = {
    ...defaultProps,
    appearance: "warning"
};

export const Error = Template.bind({});
Error.args = {
    ...defaultProps,
    appearance: "danger"
};

export const Dark = Template.bind({});
Dark.args = {
    ...defaultProps,
    appearance: "dark"
};

export const Round = Template.bind({});
Round.args = {
    ...defaultProps,
    round: true
};