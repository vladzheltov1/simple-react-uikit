import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Dropdown, IDropdownProps } from "../components/Dropdown";

export default {
	title: "Dropdown",
	component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

const defaultProps = {  
    dropList: ["Select 1", "Select 2", "Select 3"]
} as IDropdownProps;

export const Default = Template.bind({});
Default.args = {
	...defaultProps
};