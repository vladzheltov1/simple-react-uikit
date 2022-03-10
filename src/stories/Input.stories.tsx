import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Input } from "../components/Input";

export default {
    title: "Input",
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Placeholder = Template.bind({});
Placeholder.args = {
    placeholder: "Placeholder"
};

export const Value = Template.bind({});
Value.args = {
    value: "Value"
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true
};

export const DisabledWithValue = Template.bind({});
DisabledWithValue.args = {
    disabled: true,
    value: "Value"
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    label: "Label"
};