import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { CheckBox } from '../components/CheckBox';
import { Text } from '../components/Text';

export default {
    title: 'Page',
    component: React.Fragment,
} as ComponentMeta<typeof React.Fragment>;

const Template: ComponentStory<typeof CheckBox> = (args) => {
    const [checked, setChecked] = useState(false);

    return (
        <CheckBox label={<Text>Check</Text>} checked={checked} />
    )
}

const defaultProps = {
    label: "CheckBox"
}

export const Default = Template.bind({});
Default.args = {
    ...defaultProps
};