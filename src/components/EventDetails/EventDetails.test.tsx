import { render, screen } from '@testing-library/react';
import { cdd } from '../../data/events';
import { EventDetails } from './EventDetails';

describe('EventDetails', () => {
    it('should show description of the event', () => {
        render(<EventDetails description={cdd.description} />);
        expect(screen.getByText(/Details/)).toBeInTheDocument();
    });
});
