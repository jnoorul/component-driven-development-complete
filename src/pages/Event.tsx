import { Attendees } from '../components/Attendees/Attendees';
import { EventDetails } from '../components/EventDetails/EventDetails';
import { EventLocation } from '../components/EventLocation/EventLocation';
import { Header } from '../components/Header/Header';
import { TitleCard } from '../components/TitleCard/TitleCard';
import { cdd } from '../data/events';

export function Event() {
    return (
        <div>
            <Header />
            <div className="px-4">
                <TitleCard />
                <EventDetails description={cdd.description} />
                <EventLocation />
                <Attendees members={cdd.attendees} />
            </div>
        </div>
    );
}
