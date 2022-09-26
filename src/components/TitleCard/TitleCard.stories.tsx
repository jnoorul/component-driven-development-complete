import { cdd } from '../../data/events';
import { TitleCard as TitleCardComponent } from './TitleCard';

export default {
    title: 'Components/TitleCard',
    component: TitleCardComponent,
};

export const TitleCard = () => (
    <TitleCardComponent date={cdd.date} title={cdd.title} />
);
