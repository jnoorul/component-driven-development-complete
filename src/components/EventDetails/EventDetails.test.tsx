import { render, screen } from '@testing-library/react';
import { componentDrivenDevelopment } from '../../data/componentDrivenDevelopment';
import { EventDetails } from './EventDetails';

describe('EventDetails', () => {
    it('should show description of the event', () => {
        render(
            <EventDetails
                description={componentDrivenDevelopment.description}
            />
        );
        expect(screen.getByText(/Details/)).toBeInTheDocument();
    });
});
