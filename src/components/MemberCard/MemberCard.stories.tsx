import { cdd } from '../../data/events';
import { MemberCard as MemberCardComponent } from './MemberCard';

export default {
    title: 'Components/MemberCard',
    component: MemberCardComponent,
};

export const MemberCard = () => (
    <MemberCardComponent member={cdd.attendees[0]} />
);
