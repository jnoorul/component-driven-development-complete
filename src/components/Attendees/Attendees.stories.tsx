import { cdd } from '../../data/events';
import { Attendees as AttendeesComponent } from './Attendees';

export default {
    title: 'Components/Attendees',
    component: AttendeesComponent,
};

export const Attendees = () => <AttendeesComponent members={cdd.attendees} />;
