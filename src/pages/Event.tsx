import { EventDetails } from '../components/EventDetails/EventDetails';
import { Header } from '../components/Header/Header';
import { TitleCard } from '../components/TitleCard/TitleCard';
import { componentDrivenDevelopment } from '../data/componentDrivenDevelopment';

export function Event() {
    return (
        <div>
            <Header />
            <TitleCard />
            <EventDetails
                description={componentDrivenDevelopment.description}
            />
        </div>
    );
}
