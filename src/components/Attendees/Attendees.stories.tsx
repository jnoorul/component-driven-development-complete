import { componentDrivenDevelopment } from '../../data/componentDrivenDevelopment';
import { Attendees as AttendeesComponent } from './Attendees';

export default {
    title: 'Components/Attendees',
    component: AttendeesComponent,
};

export const Attendees = () => (
    <AttendeesComponent members={componentDrivenDevelopment.attendees} />
);
