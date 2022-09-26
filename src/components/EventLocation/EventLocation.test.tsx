import { render, screen } from '@testing-library/react';
import { EventLocation } from './EventLocation';

describe('EventLocation', () => {
    it('should display Venue in the heading', () => {
        render(<EventLocation />);
        expect(
            screen.getByRole('heading', { name: 'Venue' })
        ).toBeInTheDocument();
    });
    it('should display venue location', () => {
        render(<EventLocation />);
        expect(screen.getByTitle('location')).toBeInTheDocument();
    });
});
