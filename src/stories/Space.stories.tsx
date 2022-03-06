import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Space } from '../components/Space';
import { Text } from '../components/Text';

export default {
    title: 'Space',
    component: Space,
} as ComponentMeta<typeof Space>;

const Template: ComponentStory<typeof Space> = (args) => (
    <>
        <Text>Top</Text>
        <Space {...args} />
        <Text>Bottom</Text>
    </>
);

export const Default = Template.bind({});
Default.args = {
    height: 20
};