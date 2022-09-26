import { cdd } from '../../data/events';
import { EventDetails as EventDetailsComponent } from './EventDetails';

export default {
    title: 'Components/EventDetails',
    component: EventDetailsComponent,
};

export const EventDetails = () => (
    <EventDetailsComponent description={cdd.description} />
);
