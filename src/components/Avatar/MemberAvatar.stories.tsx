import { MemberAvatar } from './MemberAvatar';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Components/Avatar',
    component: MemberAvatar,
} as ComponentMeta<typeof MemberAvatar>;

const Template: ComponentStory<typeof MemberAvatar> = (args) => (
    <MemberAvatar {...args} />
);

export const HatSmile = Template.bind({});
HatSmile.args = {
    type: 'Hat',
    mouth: 'Smile',
};

export const HatSad = Template.bind({});
HatSad.args = {
    type: 'Hat',
    mouth: 'Sad',
};
