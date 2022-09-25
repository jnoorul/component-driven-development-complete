import { Attendees } from '../components/Attendees/Attendees';
import { EventDetails } from '../components/EventDetails/EventDetails';
import { EventLocation } from '../components/EventLocation/EventLocation';
import { Header } from '../components/Header/Header';
import { TitleCard } from '../components/TitleCard/TitleCard';
import { componentDrivenDevelopment } from '../data/componentDrivenDevelopment';

export function Event() {
    return (
        <div>
            <Header />
            <div className="px-4">
                <TitleCard />
                <EventDetails
                    description={componentDrivenDevelopment.description}
                />
                <EventLocation />
                <Attendees members={componentDrivenDevelopment.attendees} />
            </div>
        </div>
    );
}
