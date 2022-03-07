import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Loader } from "../components/Loader";

export default {
    title: "Loader",
    component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
    label: "Loading..."
};