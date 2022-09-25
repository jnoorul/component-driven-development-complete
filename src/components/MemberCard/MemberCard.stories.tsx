import { componentDrivenDevelopment } from '../../data/componentDrivenDevelopment';
import { MemberCard } from './MemberCard';

export default {
    title: 'Components/MemberCard',
    component: MemberCard,
};

export const Compact = () => (
    <MemberCard member={componentDrivenDevelopment.attendees[0]} />
);

export const Regular = () => (
    <MemberCard member={componentDrivenDevelopment.attendees[1]} />
);
