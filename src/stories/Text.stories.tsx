import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Text } from "../components/Text";

export default {
    title: "Text",
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

const defaultProps = {
    children: "Text"
}

export const Default = Template.bind({});
Default.args = {
    ...defaultProps,
};

export const Secondary = Template.bind({});
Secondary.args = {
    ...defaultProps,
    color: "secondary"
};

export const Bold = Template.bind({});
Bold.args = {
    ...defaultProps,
    bold: true
};

export const Italic = Template.bind({});
Italic.args = {
    ...defaultProps,
    italic: true
};

export const Light = Template.bind({});
Light.args = {
    ...defaultProps,
    light: true
};

export const Small = Template.bind({});
Small.args = {
    ...defaultProps,
    size: "small"
};
export const Large = Template.bind({});
Large.args = {
    ...defaultProps,
    size: "large"
};