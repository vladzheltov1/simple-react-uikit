import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Alert, IAlertProps } from "../components/Alert";
import { Button } from "../components/Button";
import { Text } from "../components/Text";

export default {
	title: "Alert",
	component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

const defaultProps = {
    title: "Title",
    children: "Body of the alert!",
    open: true
} as IAlertProps;

export const DefaultSmall = Template.bind({});
DefaultSmall.args = {
	...defaultProps
};

export const Medium = Template.bind({});
Medium.args = {
	...defaultProps,
    size: "medium"
};

export const Large = Template.bind({});
Large.args = {
	...defaultProps,
    size: "large"
};

export const Controls = Template.bind({});
Controls.args = {
	...defaultProps,
    size: "medium",
    title: "Warning!",
    children: (
        <Text>In order to use controls and be able to&nbsp;
            <Text bold>open/close</Text> the alert window,
            you need to use the <Text italic>useAlert</Text> hook.
            It returns <Text italic>isOpen</Text>(boolen),&nbsp;
            <Text italic>open</Text>(Function),&nbsp;
            <Text italic>close</Text>(Function).
        </Text>
    ),
    controls: (<>
        <Button>Ok</Button>
        <Button appearance="secondary">Cancel</Button>
    </>)
};