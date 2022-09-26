import { render, screen } from '@testing-library/react';
import { cdd } from '../../data/events';
import { TitleCard } from './TitleCard';

describe('TitleCard', () => {
    it('should display title card with title', () => {
        const eventTitle =
            'Component Driven (UI) Development using React, Storybook';
        render(<TitleCard date={cdd.date} title={cdd.title} />);
        expect(
            screen.getByRole('heading', { name: eventTitle })
        ).toBeInTheDocument();
        expect(
            screen.getByText('Tuesday, September 27, 2022')
        ).toBeInTheDocument();
    });
});
