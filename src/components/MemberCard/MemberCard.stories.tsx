import { cdd } from '../../data/events';
import { MemberCard } from './MemberCard';

export default {
    title: 'Components/MemberCard',
    component: MemberCard,
};

export const Compact = () => <MemberCard member={cdd.attendees[0]} />;

export const Regular = () => <MemberCard member={cdd.attendees[1]} />;
