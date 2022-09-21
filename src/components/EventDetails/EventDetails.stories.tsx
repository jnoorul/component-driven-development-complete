import { componentDrivenDevelopment } from '../../data/componentDrivenDevelopment'
import { EventDetails as EventDetailsComponent } from './EventDetails'

export default {
    title: 'Components/EventDetails',
    component: EventDetailsComponent,
}

export const EventDetails = () => (
    <EventDetailsComponent
        description={componentDrivenDevelopment.description}
    />
)
